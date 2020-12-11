<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Personification
    |--------------------------------------------------------------------------
    |
    | Defines if the system will allow users with correct permission to impersonate
    | other users.
    | This feature aims easy troubleshooting for support teams
    |
    */

    'impersonate' => env('LOGIN_PERSONIFICATION', false),
];
