<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('room_service_room_service_order')) {
            Schema::create('room_service_room_service_order', function (Blueprint $table) {
                $table->unsignedBigInteger('tenant_id')->index();
                $table->foreignId('room_service_id')->constrained()->cascadeOnDelete();
                $table->foreignId('room_service_order_id')->constrained()->cascadeOnDelete();
                $table->unsignedInteger('quantity')->default(1);
                $table->decimal('price', 16, 2);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('room_service_room_service_order');
    }
}; 