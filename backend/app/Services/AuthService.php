<?php

namespace App\Services;

class AuthService
{
    /**
     * Get the token array structure.
     *
     * @param  string $token
     * @return array
     */
    public function getTokenData(string $token): array
    {
        return [
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ];
    }

    /**
     * return the user credentials
     *
     * @param  array $request
     * @return array
     */
    public function getCredentials(array $request): array
    {
        return [
            "email"=> $request["email"],
            "password"=> $request["password"],
        ];
    }
}
