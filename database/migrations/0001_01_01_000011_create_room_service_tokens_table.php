<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('room_service_tokens')) {
            Schema::create('room_service_tokens', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->text('token');
                $table->foreignId('apartment_id')->constrained()->cascadeOnDelete();
                $table->foreignId('reservation_id')->constrained()->cascadeOnDelete();
                $table->foreignId('guest_id');
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('room_service_tokens');
    }
}; 