<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Collection;

class UserRepository
{
    protected $model;

    public function __construct(User $model)
    {
        $this->model  = $model;
    }

    /**
     * creates a new user and personalData with given data
     *
     * @param  array $data
     * @return User
     */
    public function create(array $data): User
    {
        if (isset($data["password"])) {
            $data["password"] = Hash::make($data["password"]);
        }

        $user = $this->model->create($data);

        return $user;
    }
}
