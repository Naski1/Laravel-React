<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;

// ========== AUTH ROUTES ==========
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);

    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});

// ========== PROTECTED ROUTES ==========
Route::middleware('auth')->group(function () {
    Route::get('/', fn () => inertia('Welcome'))->name('dashboard'); // Dashboard
    Route::post('/logout', [AuthController::class, 'logout']);
});
