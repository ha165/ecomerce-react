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

        $user = User::first();
        if (!$user) {
            $user = User::factory()->create();
        }

        $order = Orders::first();
        if (!$order) {
            $order = Orders::create([
                'user_id' => $user->id,
                'total_price' => 10000,
                'status' => 'pending',
                'payment_method' => 'Mpesa',
            ]);
        }
        Payments::create([
            'user_id' => $user->id,
            'order_id' => $order->id,
            'amount' => $order->total_price,
            'payment_method' => 'Mpesa',
            'transaction_id' => 'MPESA' . rand(10000, 99999),
            'status' => 'completed',
        ]);
    }
}

