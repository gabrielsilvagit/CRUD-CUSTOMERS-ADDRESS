<?php

Route::post("/auth", "AuthController@store")
    ->name('login')
    ->middleware("guest");

Route::post("/auth/logout", "LogoutController@store")
    ->name('logout')
    ->middleware("auth:api");
