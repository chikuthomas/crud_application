<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{

    
    public function index(){

        $products =Products::all();
        return response()->json([

            'status'=>200,
            'products'=>$products,
        ]);

    }


    public function edit($id){

        $product =Products::find($id);

        if($product){

            return response()->json([

                'status'=>200,
                'product'=>$product,
            ]);
        }

        else{

            
            return response()->json([

                'status'=>404,
                'message'=>'No product found with such ID!',
            ]);
        }
       

    }


    public function store(Request $request){

        //error handling

        $validator = Validator::make($request->all(),[

            'name'=>'required|max:191',
            'price'=>'required|numeric',
            'qty'=>'required|numeric',
            'image'=>'required|max:191',

        ]);

        if($validator->fails()){

            return response()->json([

                'validate_err'=> $validator->messages(),
            ]);

        }else{

        

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

    public function update(Request $request,$id){

         //error handling

         $validator = Validator::make($request->all(),[

            'name'=>'required|max:191',
            'price'=>'required|numeric',
            'qty'=>'required|numeric',
            'image'=>'required|max:191',

        ]);

        if($validator->fails()){

            return response()->json([

                'validate_err'=> $validator->messages(),
            ]);

        }else{

            $product = Products::find($id);
            $product->name = $request->input('name') ;
            $product->price = $request->input('price') ;
            $product->qty = $request->input('qty') ;
            $product->image = $request->input('image') ;
            $product->update();



            return response()->json([

            'status'=>200,
            'message'=>'Product Updated Successfully',
        ]);
    }
    }

    public function destroy($id){

        $product = Products::find($id);
        $product->delete();

        return response()->json([

            'status'=>200,
            'message'=>'Product Deleted Successfully',
        ]);
    }
}
