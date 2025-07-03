<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TenantDashboardController extends Controller
{
    public function index(Request $request)
    {
        $tenant = app('tenant');
        return Inertia::render('tenant/dashboard', [
            'tenant' => $tenant,
        ]);
    }
} 