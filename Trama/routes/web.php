<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UsuarioController;
use App\Models\Usuario;
use Illuminate\Support\Facades\Route;

//Meter un middleware que te rediriga al login
Route::get('/', function () {
         return view('layouts.main');
    });

Route::get('/tablero', function () {
    return view('layouts.tablero');
})->name('tablero');


Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login.submit');
Route::get('logout', [LoginController::class, 'logout'])->name('logout');

