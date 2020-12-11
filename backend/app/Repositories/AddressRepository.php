<?php

namespace App\Repositories;

use App\Models\Address;
use Illuminate\Database\Eloquent\Collection;
use Carbon\Carbon;

class AddressRepository
{
    protected $model;

    public function __construct(Address $model)
    {
        $this->model = $model;
    }

    /**
     * return Address data by given id
     *
     * @param  integer  $id
     * @return Address
     */
    public function getById(int $id): Address
    {
        $address = $this->model
            ->where("id", $id)
            ->firstOrFail();

        return $address;
    }

    /**
     * return all address by the type
     *
     * @return Collection
     */
    public function getAll(): Collection
    {
        $address = $this->model
            ->orderBy("name")
            ->get();

        return $address;
    }

    /**
     * creates a new address and personalData with given data
     *
     * @param  array    $data
     * @return Address
     */
    public function create(array $data): Address
    {
        $address = $this->model->create($data);

        return $address;
    }

    /**
     * updates a address by given id and data
     *
     * @param  integer  $id
     * @param  array    $data
     * @return Address
     */
    public function update(int $id, array $data): Address
    {
        $address = $this->getById($id);
        $address->fill($data);
        $address->touch(); // force updated at even theres no changes
        $address->save();

        return $this->getById($address->id);
    }

    /**
     * deletes an address by the given id
     *
     * @param  integer $id
     * @return void
     */
    public function delete(int $id): void
    {
        $address = $this->getById($id);
        $address->delete();
    }
}
