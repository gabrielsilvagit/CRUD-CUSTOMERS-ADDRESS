<?php

namespace App\Traits;

use Illuminate\Http\Response;

trait ApiResponser
{
    public function successResponse($data, $code = Response::HTTP_OK)
    {
        return response()->json($data, $code)->header("Content-Type", "application/json");
    }

    public function errorResponse($message, $code)
    {
        return response()->json(json_encode([
            'message'=>$message,
            'code'=>$code
        ]), $code);
    }
}
