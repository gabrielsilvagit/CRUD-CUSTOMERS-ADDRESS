<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        \App\Events\ContractSignedEvent::class => [
            \App\Listeners\ContractDetailsEmail::class,
            \App\Listeners\GenerateContractInstallments::class,
        ],

        \App\Events\CustomerCreated::class => [
            \App\Listeners\Customers\Created::class,
        ],
        \App\Events\CustomerUpdated::class => [
            \App\Listeners\Customers\Updated::class,
        ],
        \App\Events\CustomerDeleted::class => [
            \App\Listeners\Customers\Deleted::class,
        ],
        \App\Events\SearchDeleted::class => [
            \App\Listeners\Customers\SearchForInvalid::class,
        ],
        \App\Events\RemoveExcel::class => [
            \App\Listeners\RemoveExcelAfterDonwload::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
