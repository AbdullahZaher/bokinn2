<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class IdentifyTenant
{
    public function handle(Request $request, Closure $next): Response
    {
        $host = $request->getHost();
        \Log::info('IdentifyTenant host: ' . $host);
        // Debug: dump the host to the browser
        if ($request->query('debug-tenant-host')) {
            dd('IdentifyTenant host: ' . $host);
        }
        $tenant = null;

        // Try to find by custom domain
        $tenant = Cache::rememberForever('tenant_domain_' . $host, function () use ($host) {
            return DB::table('domains')
                ->where('domain', $host)
                ->join('tenants', 'domains.tenant_id', '=', 'tenants.id')
                ->select('tenants.*')
                ->first();
        });

        // If not found, try subdomain
        if (!$tenant) {
            $parts = explode('.', $host);
            if (count($parts) > 2) {
                $subdomain = $parts[0];
                $tenant = Cache::rememberForever('tenant_subdomain_' . $subdomain, function () use ($subdomain) {
                    return DB::table('domains')
                        ->where('domain', 'like', $subdomain . '.%')
                        ->join('tenants', 'domains.tenant_id', '=', 'tenants.id')
                        ->select('tenants.*')
                        ->first();
                });
            }
        }

        if (!$tenant) {
            abort(404, 'Tenant not found');
        }

        app()->instance('tenant', $tenant);
        return $next($request);
    }
} 