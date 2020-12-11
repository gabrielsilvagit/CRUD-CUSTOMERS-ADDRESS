<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Customer extends Model
{
    use SoftDeletes;

    /**
     * The table name related to this model.
     *
     * @var string
     */
    protected $table = 'customers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "name", "dob", "cpf", "rg", "phone",
    ];

    /**
    * Sets de relation with address table
    *
    */
    public function address()
    {
        return $this->hasmany('App\Models\Address');
    }
}
