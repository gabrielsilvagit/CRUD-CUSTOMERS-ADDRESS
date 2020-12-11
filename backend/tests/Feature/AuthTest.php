<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function aUserCanBeLogin()
    {
        $this->withoutExceptionHandling();
        $user = User::factory()->create([
            'password' => Hash::make('321321'),
        ]);
        $credentials['email'] = $user->email;
        $credentials['password'] = '321321';
        $this->json('POST', route('login'), $credentials)->assertStatus(Response::HTTP_OK);
        $this->assertAuthenticated();
    }

    /** @test */
    public function aUserCannotBeLoginWithIncorrectCredentials()
    {
        $user = User::factory()->create([
            'password' => Hash::make('321321'),
        ]);
        $credentials['email'] = 'fake@email.com';
        $credentials['password'] = '123123';
        $this->json('POST', route('login'), $credentials)->assertStatus(Response::HTTP_UNAUTHORIZED);
        $this->assertGuest();
    }
}
