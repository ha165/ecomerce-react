<?php

namespace App\Models;

use App\Http\Requests\UpdateCategoriesRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'description', 'price', 'discount_price', 'stock', 'is_active', 'category_id', 'brand_id'];

    public function category()
    {
        return $this->belongsTo(UpdateCategoriesRequest::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brands::class);
    }

    public function images()
    {
        return $this->hasMany(Product_Images::class);
    }

    public function reviews()
    {
        return $this->hasMany(Reviews::class);
    }
}
