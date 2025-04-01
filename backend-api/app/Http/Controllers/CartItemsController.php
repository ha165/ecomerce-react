<?php

namespace App\Http\Controllers;

use App\Models\Cart_items;
use App\Http\Requests\StoreCart_itemsRequest;
use App\Http\Requests\UpdateCart_itemsRequest;

class CartItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCart_itemsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart_items $cart_items)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCart_itemsRequest $request, Cart_items $cart_items)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart_items $cart_items)
    {
        //
    }
}
