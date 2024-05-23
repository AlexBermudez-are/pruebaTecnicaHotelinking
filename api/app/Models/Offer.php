<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = ['product', 'discount', 'description', 'original_price'];

    public function cupons()
    {
        return $this->hasMany(Cupon::class);
    }
}
