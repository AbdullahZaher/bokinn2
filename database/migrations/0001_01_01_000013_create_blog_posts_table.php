<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('blog_posts')) {
            Schema::create('blog_posts', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->unsignedBigInteger('r_id')->index();
                $table->string('slug')->unique()->index();
                $table->string('description');
                $table->string('title');
                $table->text('content');
                $table->unsignedInteger('views')->default(0);
                $table->foreignId('user_id')->constrained();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('blog_posts');
    }
}; 