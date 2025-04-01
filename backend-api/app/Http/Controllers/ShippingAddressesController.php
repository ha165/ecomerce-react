<?php

namespace App\Http\Controllers;

use App\Models\Shipping_addresses;
use App\Http\Requests\StoreShipping_addressesRequest;
use App\Http\Requests\UpdateShipping_addressesRequest;

class ShippingAddressesController extends Controller
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
    public function store(StoreShipping_addressesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Shipping_addresses $shipping_addresses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateShipping_addressesRequest $request, Shipping_addresses $shipping_addresses)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shipping_addresses $shipping_addresses)
    {
        //
    }
}
