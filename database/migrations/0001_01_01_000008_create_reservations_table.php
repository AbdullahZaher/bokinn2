<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('reservations')) {
            Schema::create('reservations', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('guest_id');
                $table->string('guest_name');
                $table->string('guest_phone');
                $table->date('guest_birthday')->nullable();
                $table->integer('number_of_companions')->nullable();
                $table->date('checkin');
                $table->date('checkout');
                $table->integer('number_of_nights')->default(0);
                $table->decimal('price_for_night', 16, 2)->default(0.00);
                $table->decimal('total_price', 16, 2)->default(0.00);
                $table->datetime('real_checkin')->nullable();
                $table->datetime('real_checkout')->nullable();
                $table->tinyInteger('state')->default(0);
                $table->text('note')->nullable();
                $table->foreignId('apartment_id')->references('id')->on('apartments');
                $table->foreignId('admin_id')->nullable()->constrained('users')->nullOnDelete();
                $table->integer('r_id')->nullable();
                $table->decimal('discount', 16, 2)->default(0.00);
                $table->decimal('discount_amount', 16, 2)->default(0.00);
                $table->decimal('amounts_due', 16, 2)->default(0.00);
                $table->softDeletes();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
}; 