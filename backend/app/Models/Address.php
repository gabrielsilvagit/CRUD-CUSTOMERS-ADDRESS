<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use SoftDeletes;

    /**
     * The table name related to this model.
     *
     * @var string
     */
    protected $table = 'addresses';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable =  [
        'customer_id','city','state','country','cep','number',
    ];

    /**
     * Sets which relations should be returned with.
     *
     * @var array
     */
    protected $with = [
        "customer"
    ];

    /**
    * Sets de relation with customers table
    *
    */
    public function customer()
    {
        return $this->belongsTo('App\Models\Customer');
    }
}
