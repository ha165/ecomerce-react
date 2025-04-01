<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Orders;
use App\Models\User;

class OrdersSeeder extends Seeder
{
    public function run()
    {
        $user = User::first();

        Orders::create([
            'user_id' => $user->id,
            'total_price' => 10000,
            'status' => 'pending',
            'payment_method' => 'Mpesa',
        ]);
    }
}

