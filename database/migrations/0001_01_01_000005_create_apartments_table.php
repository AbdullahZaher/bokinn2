<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('apartments')) {
            Schema::create('apartments', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('name', 20);
                $table->tinyInteger('state')->default(0);
                $table->foreignId('current_guest_id')->nullable()->references('id')->on('guests');
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('apartments');
    }
}; 