<?php

use App\Http\Controllers\AddressController;

Route::middleware(['auth:api'])
    ->prefix('address')
    ->name('address.')
    ->group(function () {
        Route::get("/",  [AddressController::class, 'index'])->name('index');
        Route::post("/", [AddressController::class, 'store'])->name('store');
        Route::get("/{id}", [AddressController::class, 'show'])->name('show');
        Route::put("/{id}", [AddressController::class, 'update'])->name('update');
        Route::delete("/{id}", [AddressController::class, 'delete'])->name('delete');
    });
