<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipping_address extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'recipient_name', 'phone', 'city', 'street', 'postal_code'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
