<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('apartment_records')) {
            Schema::create('apartment_records', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->tinyInteger('state_from');
                $table->tinyInteger('state_to');
                $table->text('note')->nullable();
                $table->foreignId('guest_id')->nullable()->references('id')->on('guests');
                $table->foreignId('apartment_id')->references('id')->on('apartments');
                $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('apartment_records');
    }
}; 