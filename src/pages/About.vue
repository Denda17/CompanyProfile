<template>
  <div class="bg-pink-50 min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="relative bg-pink-100 py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800">
          Tentang <span class="text-pink-600">BeautyGlow</span>
        </h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          BeautyGlow hadir untuk memberikan produk kosmetik berkualitas, aman,
          dan terjangkau bagi semua orang yang ingin tampil percaya diri setiap
          hari.
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section
      class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
          alt="BeautyGlow Store"
          class="rounded-2xl shadow-lg"
        />
      </div>
      <div>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Siapa Kami?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Kami adalah toko kosmetik yang berdiri sejak 2020, berkomitmen
          menghadirkan produk kecantikan terbaik dari brand lokal maupun
          internasional. Kami percaya setiap orang memiliki keunikan, dan kami
          ingin membantu Anda menonjolkannya dengan produk berkualitas.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Dengan pelayanan ramah dan konsultasi produk gratis, kami selalu
          berusaha menjadi sahabat terbaik dalam perjalanan kecantikan Anda.
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="bg-white py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-12">Visi & Misi Kami</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="bg-pink-50 rounded-xl p-8 shadow hover:shadow-lg transition"
          >
            <h3 class="text-2xl font-semibold text-pink-600 mb-4">Visi</h3>
            <p class="text-gray-600">
              Menjadi toko kosmetik terpercaya yang selalu menghadirkan inovasi
              dan mendukung kepercayaan diri setiap pelanggan.
            </p>
          </div>
          <div
            class="bg-pink-50 rounded-xl p-8 shadow hover:shadow-lg transition"
          >
            <h3 class="text-2xl font-semibold text-pink-600 mb-4">Misi</h3>
            <ul class="text-gray-600 space-y-2 text-left">
              <li>✨ Menyediakan produk kosmetik berkualitas tinggi</li>
              <li>✨ Memberikan pelayanan terbaik untuk pelanggan</li>
              <li>✨ Mendukung brand lokal untuk berkembang</li>
              <li>✨ Mengedukasi pelanggan tentang perawatan kecantikan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
        Kenapa Memilih <span class="text-pink-600">BeautyGlow?</span>
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div class="text-4xl mb-4">🌸</div>
          <h3 class="font-semibold text-lg">Produk Original</h3>
          <p class="text-gray-600 text-sm">
            Semua produk 100% original dan terjamin kualitasnya.
          </p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div class="text-4xl mb-4">💄</div>
          <h3 class="font-semibold text-lg">Varian Lengkap</h3>
          <p class="text-gray-600 text-sm">
            Beragam pilihan kosmetik lokal & internasional.
          </p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div class="text-4xl mb-4">🚚</div>
          <h3 class="font-semibold text-lg">Pengiriman Cepat</h3>
          <p class="text-gray-600 text-sm">
            Pesanan dikirim dengan cepat & aman.
          </p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div class="text-4xl mb-4">🤝</div>
          <h3 class="font-semibold text-lg">Layanan Ramah</h3>
          <p class="text-gray-600 text-sm">
            Customer service yang siap membantu kapan saja.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
