<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\ProductController;

Route::post('/add-product',[ProductController::class,'store']);

Route::get('products',[ProductController::class,'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
