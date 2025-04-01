<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            UsersSeeder::class,
            CategoriesSeeder::class,
            BrandsSeeder::class,
            ProductsSeeder::class,
            OrdersItemSeeder::class,
            PaymentsSeeder::class,
        ]);
    }
}
