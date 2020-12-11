<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    protected $user;

    protected $loggedUser;

    /**
     * setup test
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
        $credentials['email'] = $this->user->email;
        $credentials['password'] = '321321';
        $this->loggedUser = Auth::attempt($credentials);
    }

    /** @test
     * Testing store method from UserController
    */
    public function aUserCanBeCreated()
    {
        $user = User::factory()->make()->toArray();
        $user['password'] = '321321';
        $this->json('POST', route('users.store'), $user)->assertStatus(Response::HTTP_CREATED);
        $this->assertDatabaseHas('users', ['name' => $user['name']]);
    }
}
