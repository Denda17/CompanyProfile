<template>
  <!-- Fullscreen dan fix center -->
  <div class="fixed inset-0 flex items-center justify-center bg-pink-50">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <!-- Logo / Title -->
      <div class="text-center mb-6">
        <h1 class="text-3xl font-extrabold text-pink-600">BeautyGlow</h1>
        <p class="text-gray-500">Buat akun baru Anda</p>
      </div>

      <!-- Register Form -->
      <form @submit.prevent="handleRegister" class="space-y-5">
        <!-- Full Name -->
        <div>
          <label class="block text-gray-700 font-medium mb-1"
            >Nama Lengkap</label
          >
          <input
            v-model="name"
            type="text"
            placeholder="Masukkan nama lengkap Anda"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
        </div>

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

        <!-- Confirm Password -->
        <div>
          <label class="block text-gray-700 font-medium mb-1"
            >Konfirmasi Password</label
          >
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Ulangi password Anda"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Daftar
        </button>
      </form>

      <!-- Divider -->
      <div class="flex items-center my-6">
        <div class="flex-1 h-px bg-gray-300"></div>
        <span class="px-3 text-gray-400 text-sm">atau</span>
        <div class="flex-1 h-px bg-gray-300"></div>
      </div>

      <!-- Login Redirect -->
      <p class="text-center text-gray-600 text-sm">
        Sudah punya akun?
        <router-link
          to="/login"
          class="text-pink-600 font-medium hover:underline"
        >
          Login
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

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleRegister = () => {
  if (
    !name.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    alert("Harap isi semua field");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Password dan konfirmasi password tidak cocok");
    return;
  }

  alert(`Registrasi berhasil untuk: ${name.value} (${email.value})`);
  // Bisa diarahkan ke login atau simpan data ke backend
};
</script>
<style scoped></style>
