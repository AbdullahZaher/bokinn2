<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TenantHomeController extends Controller
{
    public function index(Request $request)
    {
        $tenant = app('tenant');
        return Inertia::render('tenant/home', [
            'tenant' => $tenant,
        ]);
    }
} 