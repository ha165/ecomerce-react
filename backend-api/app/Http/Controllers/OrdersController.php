<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function index()
    {
        return response()->json(Orders::where('user_id', auth()->id())->get());
    }

    public function store(Request $request)
    {
        $request->validate(['total_price' => 'required|numeric']);

        $order = Orders::create([
            'user_id' => auth()->id(),
            'total_price' => $request->total_price,
            'status' => 'pending',
            'payment_method' => $request->payment_method ?? 'Mpesa',
        ]);

        return response()->json($order, 201);
    }

    public function updateStatus($id, Request $request)
    {
        $order = Orders::findOrFail($id);
        $order->update(['status' => $request->status]);
        return response()->json(['message' => 'Order updated']);
    }
}
