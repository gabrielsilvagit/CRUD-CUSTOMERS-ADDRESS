<?php

namespace App\Http\Resources;

use Illuminate\Support\Arr;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $user = new UserResource($this);

        return [
            "token" => $this->token,
            "user" => Arr::except($user, "token"),
        ];
    }

    public function boot()
    {
        Resource::withoutWrapping();
    }
}
