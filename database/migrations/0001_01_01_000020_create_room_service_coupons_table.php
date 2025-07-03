<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('room_service_coupons')) {
            Schema::create('room_service_coupons', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('code')->unique();
                $table->decimal('discount', 16, 2);
                $table->integer('uses')->default(0);
                $table->integer('max_uses')->nullable();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('room_service_coupons');
    }
}; 