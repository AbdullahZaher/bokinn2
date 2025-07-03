<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('payments')) {
            Schema::create('payments', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->tinyInteger('status')->default(0);
                $table->decimal('amount', 16, 2)->default(0.00);
                $table->decimal('tax_percentage', 16, 2)->default(0.00);
                $table->decimal('tax_amount', 16, 2)->default(0.00);
                $table->decimal('discount_percentage', 16, 2)->default(0.00);
                $table->decimal('discount_amount', 16, 2)->default(0.00);
                $table->decimal('total_amount', 16, 2)->default(0.00);
                $table->json('payment_details')->nullable();
                $table->foreignId('user_id')->nullable()->constrained();
                $table->string('order_model_type');
                $table->unsignedBigInteger('order_model_id');
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
}; 