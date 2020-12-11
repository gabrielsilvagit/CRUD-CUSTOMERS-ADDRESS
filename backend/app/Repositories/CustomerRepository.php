<?php

namespace App\Repositories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Collection;
use Carbon\Carbon;

class CustomerRepository
{
    protected $model;

    public function __construct(Customer $model)
    {
        $this->model = $model;
    }

    /**
     * return customer data by given id
     *
     * @param  integer  $id
     * @return Customer
     */
    public function getById(int $id): Customer
    {
        $customer = $this->model
            ->where("id", $id)
            ->firstOrFail();

        return $customer;
    }

    /**
     * return all customers by the type
     *
     * @return Collection
     */
    public function getAll(): Collection
    {
        $customers = $this->model
            ->orderBy("name")
            ->get();

        return $customers;
    }

    /**
     * creates a new customer and personalData with given data
     *
     * @param  array    $data
     * @return Customer
     */
    public function create(array $data): Customer
    {
        $customer = $this->model->create($data);

        return $customer;
    }

    /**
     * updates a customer by given id and data
     *
     * @param  integer  $id
     * @param  array    $data
     * @return Customer
     */
    public function update(int $id, array $data): Customer
    {
        $customer = $this->getById($id);
        $customer->fill($data);
        $customer->touch(); // force updated at even theres no changes
        $customer->save();

        return $this->getById($customer->id);
    }

    /**
     * deletes an customer by the given id
     *
     * @param  integer $id
     * @return void
     */
    public function delete(int $id): void
    {
        $customer = $this->getById($id);
        $customer->delete();
    }
}
