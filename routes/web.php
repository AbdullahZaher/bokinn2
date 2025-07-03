<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Tenant\TenantHomeController;
use App\Http\Controllers\Tenant\TenantDashboardController;
use App\Http\Middleware\IdentifyTenant;

Route::get('/', function () {
    return Inertia::render('landing');
})->name('home');

// Public routes
Route::get('/blog', fn () => Inertia::render('blog'))->name('public.blog');
Route::get('/pricing', fn () => Inertia::render('pricing'))->name('public.pricing');

Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    Route::get('/', fn () => Inertia::render('dashboard'))->name('dashboard.home');
    Route::get('/customers', fn () => Inertia::render('dashboard/customers'))->name('dashboard.customers');
    Route::get('/plans', fn () => Inertia::render('dashboard/plans'))->name('dashboard.plans');
    Route::get('/domain-requests', fn () => Inertia::render('dashboard/domain-requests'))->name('dashboard.domainRequests');
    Route::get('/app-groups', fn () => Inertia::render('dashboard/app-groups'))->name('dashboard.appGroups');
    Route::get('/apps', fn () => Inertia::render('dashboard/apps'))->name('dashboard.apps');
    Route::get('/blog', fn () => Inertia::render('dashboard/blog'))->name('dashboard.blog');
    Route::get('/admins', fn () => Inertia::render('dashboard/admins'))->name('dashboard.admins');
    Route::get('/settings', fn () => Inertia::render('dashboard/settings'))->name('dashboard.settings');
});

// Tenant routes (subdomain and custom domain)
Route::middleware([IdentifyTenant::class])->group(function () {
    Route::domain('{tenant}.yourapp.com')->group(function () {
        Route::get('/', [TenantHomeController::class, 'index'])->name('tenant.home');
        Route::get('/dashboard', [TenantDashboardController::class, 'index'])->name('tenant.dashboard');
    });
    Route::domain('{tenant}.localhost')->group(function () {
        Route::get('/', [TenantHomeController::class, 'index'])->name('tenant.home.local');
        Route::get('/dashboard', [TenantDashboardController::class, 'index'])->name('tenant.dashboard.local');
    });
    Route::domain('{custom_domain}')->group(function () {
        Route::get('/', [TenantHomeController::class, 'index'])->name('tenant.home.custom');
        Route::get('/dashboard', [TenantDashboardController::class, 'index'])->name('tenant.dashboard.custom');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
