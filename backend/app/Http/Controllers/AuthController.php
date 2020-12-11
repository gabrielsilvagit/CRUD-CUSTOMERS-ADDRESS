<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponser;
use App\Services\AuthService;
use App\Http\Requests\AuthRequest;
use App\Http\Resources\AuthResource;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use ApiResponser;

    protected $authService;

    /**
     * class constructor
     *
     * @param AuthService $authService
     */
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(AuthRequest $request)
    {
        $credentials = $this->authService->getCredentials($request->all());

        if (!$token = auth('api')->attempt($credentials)) {
            return $this->errorResponse("Unauthorized", 401);
        }
        $user = Auth::user();
        $user->token = $token;

        return $this->successResponse(json_encode($user));
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update()
    {
        $newToken = auth()->refresh();
        $tokenData = $this->authService->getTokenData($newToken);

        return $this->successResponse($tokenData);
    }
}
