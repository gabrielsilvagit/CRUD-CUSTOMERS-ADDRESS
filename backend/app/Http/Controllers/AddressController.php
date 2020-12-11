<?php

namespace App\Http\Controllers;

    use Illuminate\Support\Facades\DB;
    use App\Traits\ApiResponser;
    use Illuminate\Http\Response;
    use App\Repositories\AddressRepository;
    use App\Http\Requests\AddressRequest;
    use App\Http\Resources\AddressResource;
    use App\Services\AddressService;

    class AddressController extends Controller
    {
        use ApiResponser;

        protected $addressRepo;

        /**
         * class constructor
         *
         * @param AddressRepository $addressRepo
         */
        public function __construct(AddressRepository $addressRepo)
        {
            $this->addressRepo = $addressRepo;
        }

        /**
         * returns all addresss
         *
         * @return ApiResponser
         */
        public function index()
        {
            $addresss = $this->addressRepo->getAll();

            return $this->successResponse(AddressResource::collection($addresss));
        }

        /**
         * creates a new address with given data
         *
         * @param AddressRequest $request
         * @return ApiResponser
         */
        public function store(AddressRequest $request)
        {
            $address = $this->addressRepo->create($request->all());
            $response = json_encode(new AddressResource($address));

            return $this->successResponse($response, Response::HTTP_CREATED);
        }

        /**
         * Retrieves a address data by a given ID
         *
         * @param integer $id
         * @return ApiResponser
         */
        public function show(int $id)
        {
            $address = $this->addressRepo->getById($id);

            return $this->successResponse(new AddressResource($address));
        }

        /**
         * Updates a address info by given ID with provided data
         *
         * @param AddressRequest $request
         * @param integer $id
         * @return ApiResponser
         */
        public function update(AddressRequest $request, int $id)
        {
            DB::beginTransaction();
            $address = $this->addressRepo->update($id, $request->all());
            DB::commit();

            $reponse = json_encode(new AddressResource($address));

            return $this->successResponse($reponse);
        }

        /**
         * deletes a address by given ID
         *
         * @param integer $id
         * @return void
         */
        public function delete(int $id)
        {
            $this->addressRepo->delete($id);

            return $this->successResponse(null, Response::HTTP_NO_CONTENT);
        }
    }


