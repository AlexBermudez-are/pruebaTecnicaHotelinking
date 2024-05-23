<?php

use App\Http\Controllers\CuponsController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/api/csrf-token', function () {
    return response()->json(csrf_token());
});

Route::get('/api/user/cupons', [CuponsController::class, 'getCupons']);
Route::post('/api/user/cupon/create', [CuponsController::class, 'createCupon'])->withoutMiddleware(['Illuminate\Foundation\Http\Middleware\VerifyCsrfToken']);
Route::put('/api/user/cupon/{id}', [CuponsController::class, 'redeemCoupon'])->withoutMiddleware(['Illuminate\Foundation\Http\Middleware\VerifyCsrfToken']);

Route::get('/api/user/{id}', [UserController::class, 'getUserUnique']); 
Route::post('/api/user/register', [UserController::class, 'register'])->withoutMiddleware(['Illuminate\Foundation\Http\Middleware\VerifyCsrfToken']);
Route::post('/api/user/login', [UserController::class, 'login'])->withoutMiddleware(['Illuminate\Foundation\Http\Middleware\VerifyCsrfToken']);

Route::get('/api/offers', OfferController::class);