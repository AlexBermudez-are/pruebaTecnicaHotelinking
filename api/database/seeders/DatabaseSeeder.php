<?php

namespace Database\Seeders;

use App\Models\Cupon;
use App\Models\Offer;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(5)->create();
        Offer::factory(10)->create();
        Cupon::factory(10)->create();
    }
}
