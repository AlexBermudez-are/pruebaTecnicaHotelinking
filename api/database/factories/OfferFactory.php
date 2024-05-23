<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Offer>
 */
class OfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $uniqueProducts = collect(['camisa', 'pantalon', 'calcetas', 'camperas', 'buzos', 'faldas', 'vestido', 'camison', 'pants', 'short']);

        return [
            'product' => fake()->unique()->randomElement($uniqueProducts),
            'description' => implode(' ', fake()->words(3)),
            'discount' => fake()->numberBetween(1, 5) * 10, 
            'original_price' => fake()->randomNumber(2) * 50,
            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => fake()->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
