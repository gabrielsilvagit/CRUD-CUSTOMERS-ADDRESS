<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponser;

class LogoutController extends Controller
{
    use ApiResponser;

    public function store()
    {
        auth()->logout();

        return $this->successResponse(null);
    }
}
