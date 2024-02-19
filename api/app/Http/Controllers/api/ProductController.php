<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products;




class ProductController extends Controller
{

    
    public function index(){

        $products =Products::all();
        return response()->json([

            'status'=>200,
            'products'=>$products,
        ]);

        

    }



    public function store(Request $request){

        $product = new Products;
        $product->name = $request->input('name') ;
        $product->price = $request->input('price') ;
        $product->qty = $request->input('qty') ;
        $product->image = $request->input('image') ;
        $product->save();

        return response()->json([

            'status'=>200,
            'message'=>'Product Added Successfully',
        ]);
    }
}
