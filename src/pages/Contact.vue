<template>
  <div class="bg-pink-50 min-h-screen flex flex-col items-center">
    <!-- Header -->
    <section class="text-center py-12">
      <h1 class="text-4xl font-extrabold text-gray-800">
        Hubungi <span class="text-pink-600">BeautyGlow</span>
      </h1>
      <p class="mt-4 text-gray-600 max-w-xl mx-auto">
        Kami senang mendengar dari Anda! Silakan hubungi kami melalui informasi
        berikut atau isi formulir.
      </p>
    </section>

    <!-- Content -->
    <section
      class="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
    >
      <!-- Contact Info -->
      <div class="bg-white rounded-2xl shadow-md p-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">
          Informasi Kontak
        </h2>
        <ul class="space-y-6">
          <li class="flex items-center space-x-4">
            <div class="bg-pink-100 text-pink-600 p-3 rounded-full">📍</div>
            <div>
              <p class="font-medium">Alamat</p>
              <p class="text-gray-600">Jl. Mawar No. 15, Jakarta</p>
            </div>
          </li>
          <li class="flex items-center space-x-4">
            <div class="bg-pink-100 text-pink-600 p-3 rounded-full">📞</div>
            <div>
              <p class="font-medium">Telepon</p>
              <p class="text-gray-600">+62 812 3456 7890</p>
            </div>
          </li>
          <li class="flex items-center space-x-4">
            <div class="bg-pink-100 text-pink-600 p-3 rounded-full">✉️</div>
            <div>
              <p class="font-medium">Email</p>
              <p class="text-gray-600">support@beautyglow.com</p>
            </div>
          </li>
          <li class="flex items-center space-x-4">
            <div class="bg-pink-100 text-pink-600 p-3 rounded-full">⏰</div>
            <div>
              <p class="font-medium">Jam Operasional</p>
              <p class="text-gray-600">Senin - Sabtu (09:00 - 21:00)</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Contact Form -->
      <div class="bg-white rounded-2xl shadow-md p-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Kirim Pesan</h2>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Nama</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Email</label
            >
            <input
              type="email"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Masukkan email Anda"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Pesan</label
            >
            <textarea
              rows="4"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Tulis pesan Anda..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition font-medium"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>

    <!-- Google Map -->
    <section class="w-full max-w-6xl px-6 pb-16">
      <iframe
        class="w-full h-64 md:h-96 rounded-2xl shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7312649709054!2d106.82715307494822!3d-6.168329893818464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3eebc2f1dbb%3A0x6b8f86c043d64b14!2sJakarta!5e0!3m2!1sen!2sid!4v1693486407890!5m2!1sen!2sid"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>
  </div>
</template>

<script setup></script>
