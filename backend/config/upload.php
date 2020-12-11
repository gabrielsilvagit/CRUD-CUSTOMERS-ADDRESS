<?php

return [

    /***********************************************
     *
     *  UPLOAD SETTINGS
     *
     */

    'settings' => [
        'max_file_size' => (20 * 1024),
        'allowed_ext' => 'jpeg,jpg,pdf,png'
    ],

    /***********************************************
     *
     *  UPLOAD DIRECTORIES
     *
     */

    'contract' => join('/', ['contracts','']),
    'avatar' => join('/', ['avatars','']),
    'inventoryProduct' => join('/', ['inventoryProducts','']),
    'excel' => join('/', ['excel','']),
];
