<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->id ? $this->id : 0;

        return [
            "email"=>["required", Rule::unique("users")->whereNull("deleted_at")->ignore($id)],
            "password"=>"required",
            "name"=>"required",
        ];
    }
}
