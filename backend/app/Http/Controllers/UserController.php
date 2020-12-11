<?php

namespace App\Http\Controllers;

use App\Mail\NewUserMail;
use App\Traits\ApiResponser;
use Illuminate\Http\Response;
use App\Repositories\UserRepository;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    use ApiResponser;

    protected $userRepo;

    /**
     * class constructor
     *
     * @param UserRepository $userRepo
     */
    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    /**
     * Create a new record with the given data
     *
     * @param  UserRequest  $request
     * @return ApiResponser
     */
    public function store(UserRequest $request)
    {
        $user = $this->userRepo->create($request->all());

        return $this->successResponse(new UserResource($user), Response::HTTP_CREATED);
    }
}
