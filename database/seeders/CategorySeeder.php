<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::create([
            'name' => 'Mliječni proizvodi',
            'slug' => 'mlijecni'
        ]);

        Category::create([
            'name' => 'Kupus asortiman',
            'slug' => 'kupus'
        ]);
    }
}