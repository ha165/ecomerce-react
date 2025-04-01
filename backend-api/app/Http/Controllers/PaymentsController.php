<?php

namespace App\Http\Controllers;

use App\Models\Payments;
use Illuminate\Http\Request;

class PaymentsController extends Controller
{
    public function index()
    {
        return response()->json(Payments::where('user_id', auth()->id())->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'order_id' => 'required|exists:orders,id',
            'amount' => 'required|numeric',
        ]);

        $payment = Payments::create([
            'user_id' => auth()->id(),
            'order_id' => $request->order_id,
            'amount' => $request->amount,
            'payment_method' => $request->payment_method ?? 'Mpesa',
            'transaction_id' => 'MPESA' . rand(10000, 99999),
            'status' => 'completed',
        ]);

        return response()->json($payment, 201);
    }
}
