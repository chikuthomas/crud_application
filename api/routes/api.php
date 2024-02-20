<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\ProductController;

Route::post('/add-product',[ProductController::class,'store']);

Route::get('products',[ProductController::class,'index']);

Route::get('/edit-product/{id}',[ProductController::class,'edit']);

Route::put('/update-product/{id}',[ProductController::class,'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
