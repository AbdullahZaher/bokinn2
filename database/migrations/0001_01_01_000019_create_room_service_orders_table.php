<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('room_service_orders')) {
            Schema::create('room_service_orders', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->uuid('uuid')->unique();
                $table->tinyInteger('state')->default(0);
                $table->foreignId('apartment_id')->constrained();
                $table->foreignId('guest_id');
                $table->foreignId('admin_id')->nullable();
                $table->foreignId('payment_id')->nullable()->constrained();
                $table->string('note')->nullable();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('room_service_orders');
    }
}; 