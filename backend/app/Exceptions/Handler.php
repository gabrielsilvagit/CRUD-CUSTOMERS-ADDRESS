<?php

namespace App\Exceptions;

use Exception;
use App\Traits\ApiResponser;
use Illuminate\Http\Response;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\JWTException;

class Handler extends ExceptionHandler
{
    use ApiResponser;

    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [

    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception                $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        \Log::debug($exception);
        // return parent::render($request, $exception);

        if ($exception instanceof NotFoundHttpException) {
            return $this->errorResponse(
                __('errors.route.notfound'),
                Response::HTTP_NOT_FOUND
            );
        }

        if ($exception instanceof HttpException) {
            $code = $exception->getStatusCode();
            $message = Response::$statusTexts[$code];

            return $this->errorResponse($message, $code);
        }

        if ($exception instanceof ModelNotFoundException) {
            $model = strtolower(class_basename($exception->getModel()));

            return $this->errorResponse(
                __('errors.model.notfound', ['model'=>$model]),
                Response::HTTP_NOT_FOUND
            );
        }

        if ($exception instanceof AuthorizationException) {
            return $this->errorResponse(
                $exception->getMessage(),
                Response::HTTP_FORBIDDEN
            );
        }

        if ($exception instanceof AuthenticationException) {
            return $this->errorResponse($exception->getMessage(), Response::HTTP_UNAUTHORIZED);
        }

        if ($exception instanceof ValidationException) {
            // if it is a test environment do not change the response format
            if (env('APP_ENV') === 'testing') {
                return parent::render(json_encode($request), $exception);
            }

            // $errors = $exception->validator->errors()->getMessages();

            // return response()->json(json_encode($errors), 200);
            return response()->json(json_encode([
                'status' => 'error',
                'msg'    => 'Error',
                'errors' => $exception->errors(),
            ]), 422);
        }

        if ($exception instanceof TokenInvalidException) {
            return $this->errorResponse("Invalid authentication token", 400);
        }

        if ($exception instanceof TokenExpiredException) {
            return $this->errorResponse("Token is expired", 400);
        }

        if ($exception instanceof JWTException) {
            return $this->errorResponse("There is a problem with your authetication token", 400);
        }

        if (env('APP_DEBUG', false)) {
            $code = $exception->getCode();
            $message = $exception->getMessage(); //Response::$statusTexts[$code];
            $file = $exception->getFile();
            $line = $exception->getLine();
            $trace = $exception->getTrace();

            return $this->errorResponse(json_encode([
                "code"=>$code,
                "message"=>$message,
                "file"=>$file,
                "line"=>$line,
                "trace"=>$trace,
            ]), 500);
        }

        return $this->errorResponse(
            __('errors.unexpected'),
            Response::HTTP_INTERNAL_SERVER_ERROR
        );
    }
}
