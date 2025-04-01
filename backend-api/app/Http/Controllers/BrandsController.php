<?php

namespace App\Http\Controllers;

use App\Models\Brands;
use Illuminate\Http\Request;

class BrandsController extends Controller
{
    public function index()
    {
        return response()->json(Brands::all());
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|unique:brands']);
        $brand = Brands::create(['name' => $request->name]);
        return response()->json($brand, 201);
    }
}
