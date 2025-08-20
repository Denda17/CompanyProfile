<template>
  <div class="fixed inset-0 flex items-center justify-center bg-pink-50">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <!-- Logo / Title -->
      <div class="text-center mb-6">
        <h1 class="text-3xl font-extrabold text-pink-600">BeautyGlow</h1>
        <p class="text-gray-500">Masuk ke akun Anda</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- Email -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Masukkan email Anda"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Masukkan password"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
        </div>

        <!-- Remember Me -->
        <div class="flex items-center justify-between text-sm text-gray-600">
          <label class="flex items-center">
            <input type="checkbox" class="mr-2 rounded" />
            Ingat saya
          </label>
          <a href="#" class="text-pink-600 hover:underline">Lupa password?</a>
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Login
        </button>
      </form>

      <!-- Divider -->
      <div class="flex items-center my-6">
        <div class="flex-1 h-px bg-gray-300"></div>
        <span class="px-3 text-gray-400 text-sm">atau</span>
        <div class="flex-1 h-px bg-gray-300"></div>
      </div>

      <!-- Register Redirect -->
      <p class="text-center text-gray-600 text-sm">
        Belum punya akun?
        <router-link
          to="/register"
          class="text-pink-600 font-medium hover:underline"
        >
          Daftar
        </router-link>
      </p>
      <p class="text-center text-gray-600 text-sm">
        Back to
        <router-link to="/" class="text-pink-600 font-medium hover:underline">
          Home
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleLogin = () => {
  if (email.value && password.value) {
    alert(`Login berhasil dengan email: ${email.value}`);
  } else {
    alert("Silakan isi email dan password terlebih dahulu");
  }
};
</script>
