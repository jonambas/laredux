<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        User::create([
          'name'      => 'Jon Ambas',
          'email'     => 'admin@admin.io',
          'password'  => bcrypt('password'),
        ]);
        
    }
}
