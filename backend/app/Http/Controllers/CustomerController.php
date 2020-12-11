<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponser;
use Illuminate\Http\Response;
use App\Services\CustomerService;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\CustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Repositories\CustomerRepository;

class CustomerController extends Controller
{
    use ApiResponser;

    protected $customerRepo;

    /**
     * class constructor
     *
     * @param CustomerRepository $customerRepo
     */
    public function __construct(CustomerRepository $customerRepo)
    {
        $this->customerRepo = $customerRepo;
    }

    /**
     * returns all customers
     *
     * @return ApiResponser
     */
    public function index()
    {
        $customers = $this->customerRepo->getAll();

        return $this->successResponse(CustomerResource::collection($customers));
    }

    /**
     * creates a new customer with given data
     *
     * @param CustomerRequest $request
     * @return ApiResponser
     */
    public function store(CustomerRequest $request)
    {
        $customer = $this->customerRepo->create($request->all());
        $response = json_encode(new CustomerResource($customer));

        return $this->successResponse($response, Response::HTTP_CREATED);
    }

    /**
     * Retrieves a customer data by a given ID
     *
     * @param integer $id
     * @return ApiResponser
     */
    public function show(int $id)
    {
        $customer = $this->customerRepo->getById($id);

        return $this->successResponse(new CustomerResource($customer));
    }

    /**
     * Updates a customer info by given ID with provided data
     *
     * @param CustomerRequest $request
     * @param integer $id
     * @return ApiResponser
     */
    public function update(CustomerRequest $request, int $id)
    {
        DB::beginTransaction();
        $customer = $this->customerRepo->update($id, $request->all());
        DB::commit();

        $reponse = json_encode(new CustomerResource($customer));

        return $this->successResponse($reponse);
    }

    /**
     * deletes a customer by given ID
     *
     * @param integer $id
     * @return void
     */
    public function delete(int $id)
    {
        $this->customerRepo->delete($id);

        return $this->successResponse(null, Response::HTTP_NO_CONTENT);
    }
}
