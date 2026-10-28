<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::get('/', function () {
        // return view('welcome');
        return view('index');
    });
});

Route::get('/login', [App\Http\Controllers\LoginController::class, 'showLoginForm'])->name('login');
