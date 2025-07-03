<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('payment_tax')) {
            Schema::create('payment_tax', function (Blueprint $table) {
                $table->unsignedBigInteger('tenant_id')->index();
                $table->foreignId('payment_id')->constrained()->cascadeOnDelete();
                $table->foreignId('tax_id')->constrained()->cascadeOnDelete();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('payment_tax');
    }
}; 