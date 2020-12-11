<?php

namespace App\Providers;

use App\Models\User;
use App\Models\Permission;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Schema;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // if (Schema::hasTable('permissions')) {
        //     $permissions = Permission::with('roles')->get();
        //     foreach ($permissions as $permission) {
        //         Gate::define($permission->name, function (User $user) use ($permission) {
        //             return $user->hasPermission($permission);
        //         });
        //     }

        //     Gate::before(function (User $user, $ability) {
        //         if ($user->isAdmin()) {
        //             return true;
        //         }
        //     });
        // }
    }
}
