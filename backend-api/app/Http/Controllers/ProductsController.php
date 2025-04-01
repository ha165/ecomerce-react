<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        return response()->json(Products::all());
    }

    public function show($id)
    {
        return response()->json(Products::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:products',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'brand_id' => 'required|exists:brands,id',
            'stock' => 'required|integer',
        ]);

        $product = Products::create($request->all());
        return response()->json($product, 201);
    }
}
