<?php

use App\Http\Controllers\UserController;

Route::post("/users",  [UserController::class, 'store'])
    ->name('users.store')
    ->middleware("guest");
