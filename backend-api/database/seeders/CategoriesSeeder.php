<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Categories;

class CategoriesSeeder extends Seeder
{
    public function run()
    {
        $categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports'];

        foreach ($categories as $category) {
            Categories::create([
                'name' => $category,
                'slug' => strtolower(str_replace(' ', '-', $category)),
            ]);
        }
    }
}
