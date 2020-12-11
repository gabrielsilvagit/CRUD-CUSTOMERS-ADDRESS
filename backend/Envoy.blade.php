@servers(['web' => $user.'@'.$host, 'localhost' => '127.0.0.1'])
@setup
	// Sanity checks
	if (empty($host)) {
		exit('ERROR: $host var empty or not defined');
	}
	if (empty($user)) {
		exit('ERROR: $user var empty or not defined');
	}
	if (empty($path)) {
		exit('ERROR: $path var empty or not defined');
	}
	if (empty($build)) {
		exit('ERROR: $build var empty or not defined');
	}
	if (empty($commit)) {
		exit('ERROR: $commit var empty or not defined');
	}

	if (file_exists($path) || is_writable($path)) {
		exit("ERROR: cannot access $path");
	}


	// Ensure $path is a potential web directory (/home/* or /var/www/*)
	if (!(preg_match("/(\/home\/|\/var\/www\/)/i", $path) === 1)) {
		exit('ERROR: $path provided doesn\'t look like a web directory path?');
	}

	$app_dir = $path;
	$releases_dir = $app_dir . '/releases';
	$new_release_dir = $releases_dir . '/' . $build . '_' . $commit;

	$remote = $user . '@' . $host . ':' . $new_release_dir;

	// Command or path to invoke PHP
	$php = empty($php) ? 'php' : $php;
@endsetup


@story('deploy')
	rsync
	setup_symlinks
	verify_install
	activate_release
	optimise
	cleanup
@endstory


@task('debug', ['on' => 'localhost'])
	ls -la {{ $dir }}
@endtask


@task('rsync', ['on' => 'localhost'])
	echo "* Deploying code from {{ $dir }} to {{ $remote }} *"
	rsync -zrSlh --stats --exclude-from=deployment-exclude-list.txt {{ $dir }}/ {{ $remote }}
@endtask


@task('verify_install', ['on' => 'web'])
	echo "* Verifying install ({{ $new_release_dir }}) *"
	cd {{ $new_release_dir }}

	echo "* Installing Composer on ({{ $new_release_dir }}) *"
	composer install --no-interaction --optimize-autoloader --no-dev

	echo "* Version *"
	{{ $php }} artisan --version
@endtask


@task('setup_symlinks', ['on' => 'web'])
	echo "* Linking .env file to new release dir ({{ $app_dir }}/.env -> {{ $new_release_dir }}/.env) *"
	ln -nfs {{ $app_dir }}/.env {{ $new_release_dir }}/.env

	if [ -f {{ $new_release_dir }}/storage ]; then
		echo "* Moving existing storage dir *"
		mv {{ $new_release_dir }}/storage {{ $new_release_dir }}/storage.orig 2>/dev/null
	fi

	echo "* Linking storage directory to new release dir ({{ $app_dir }}/storage -> {{ $new_release_dir }}/storage) *"
	ln -nfs {{ $app_dir }}/storage {{ $new_release_dir }}/storage
@endtask


@task('activate_release', ['on' => 'web'])
	echo "* Activating new release ({{ $new_release_dir }} -> {{ $app_dir }}/current) *"
	ln -nfs {{ $new_release_dir }} {{ $app_dir }}/current
@endtask


@task('optimise', ['on' => 'web'])
	echo '* Optimizing and Running migrations *'
	cd {{ $new_release_dir }}

	echo '* Artisan Down *'
	{{ $php }} artisan down

	# https://laravel.com/docs/6.x/deployment#optimization
	{{ $php }} artisan config:cache
	# Only use when no closure used in routes
	#{{ $php }} artisan route:cache

	echo '* Clearing cache and optimising *'
	{{ $php }} artisan cache:clear
	{{ $php }} artisan config:clear
	{{ $php }} artisan route:clear
	{{ $php }} artisan view:clear
    {{ $php }} artisan storage:link

	echo '* Running migrations *'
	{{ $php }} artisan migrate --force

	echo '* Artisan UP *'
	{{ $php }} artisan up
@endtask


@task('cleanup', ['on' => 'web'])
	echo "* Executing cleanup command in {{ $releases_dir }} *"
	ls -dt {{ $releases_dir }}/*/ | tail -n +4 | xargs rm -rf
@endtask
