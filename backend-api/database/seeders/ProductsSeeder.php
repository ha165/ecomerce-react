<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Products;

class ProductsSeeder extends Seeder
{
    public function run()
    {
        $products = [
            ['Samsung Galaxy S21', 120000, 100000, 1, 1],
            ['Nike Running Shoes', 5000, 4000, 2, 2],
            ['Sony 55-inch TV', 70000, 65000, 1, 3],
            ['Adidas Sneakers', 6000, 5500, 2, 4],
            ['Apple MacBook Pro', 250000, 230000, 1, 5]
        ];

        foreach ($products as $product) {
            Products::create([
                'name' => $product[0],
                'slug' => strtolower(str_replace(' ', '-', $product[0])),
                'description' => 'This is a test product',
                'price' => $product[1],
                'discount_price' => $product[2],
                'stock' => 100,
                'category_id' => $product[3],
                'brand_id' => $product[4],
            ]);
        }
    }
}
