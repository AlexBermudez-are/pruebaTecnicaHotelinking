<?php

namespace Database\Factories;

use App\Models\Offer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cupon>
 */
class CuponFactory extends Factory
{
    public function definition(): array
    {
        $userIds = User::pluck('id')->toArray(); // Obtiene aleatoriamente a un usuario existente
        $offerIds = Offer::pluck('id')->toArray();
        
        return [
            'code' => fake()->unique()->randomNumber(6),
            'state' => fake()->randomElement(['active', 'redeemed', 'inactive']),
            'offer_id' => fake()->randomElement($offerIds),
            'user_id' => fake()->randomElement($userIds),
            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => fake()->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
