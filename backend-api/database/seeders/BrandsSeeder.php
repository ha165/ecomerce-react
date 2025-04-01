<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Brands;

class BrandsSeeder extends Seeder
{
    public function run()
    {
        $brands = ['Samsung', 'Nike', 'Apple', 'Sony', 'Adidas'];

        foreach ($brands as $brand) {
            Brands::create([
                'name' => $brand,
                'slug' => strtolower($brand),
            ]);
        }
    }
}
