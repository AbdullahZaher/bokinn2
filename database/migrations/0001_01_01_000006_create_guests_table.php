<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('guests')) {
            Schema::create('guests', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('name');
                $table->string('guest_id');
                $table->string('phone');
                $table->date('checkin');
                $table->date('checkout');
                $table->text('note')->nullable();
                $table->foreignId('apartment_id')->references('id')->on('apartments');
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('guests');
    }
}; 