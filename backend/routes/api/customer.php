<?php

use App\Http\Controllers\CustomerController;

Route::middleware(['auth:api'])
    ->prefix('customers')
    ->name('customers.')
    ->group(function () {
        Route::get("/",  [CustomerController::class, 'index'])->name('index');
        Route::post("/", [CustomerController::class, 'store'])->name('store');
        Route::get("/{id}", [CustomerController::class, 'show'])->name('show');
        Route::put("/{id}", [CustomerController::class, 'update'])->name('update');
        Route::delete("/{id}", [CustomerController::class, 'delete'])->name('delete');
    });
