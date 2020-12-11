<?php

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$dir = __DIR__ . '/api/*';

foreach (glob($dir) as $file) {
    include $file;
}
