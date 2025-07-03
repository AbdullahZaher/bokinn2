<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('tenants')) {
            Schema::create('tenants', function (Blueprint $table) {
                $table->string('id')->primary();
                $table->foreignId('user_id')->constrained()->cascadeOnDelete();
                $table->foreignId('package_id')->constrained()->cascadeOnDelete();
                $table->timestamps();
                $table->json('data')->nullable();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
}; 