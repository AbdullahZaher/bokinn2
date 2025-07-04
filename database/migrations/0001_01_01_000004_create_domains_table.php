<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('domains')) {
            Schema::create('domains', function (Blueprint $table) {
                $table->increments('id');
                $table->string('domain', 255)->unique();
                $table->string('tenant_id');
                $table->timestamps();
                $table->foreign('tenant_id')->references('id')->on('tenants')->onUpdate('cascade')->onDelete('cascade');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('domains');
    }
}; 