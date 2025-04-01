<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Payments;
use App\Models\Orders;
use App\Models\User;

class PaymentsSeeder extends Seeder
{
    public function run()
    {
        $order = Orders::first();
        $user = User::first();

        Payments::create([
            'user_id' => $user->id,
            'order_id' => $order->id,
            'amount' => $order->total_price,
            'payment_method' => 'Mpesa',
            'transaction_id' => 'MPESA12345',
            'status' => 'completed',
        ]);
    }
}
