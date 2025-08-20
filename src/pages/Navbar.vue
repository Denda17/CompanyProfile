<template>
  <nav
    v-if="!route.meta.hideNavbar"
    class="bg-purple-500 shadow-md fixed top-0 left-0 w-full z-50"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="text-2xl font-bold text-white">TOKO APA AJA</div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex space-x-6">
          <router-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.path"
            class="text-white hover:text-black transition"
            active-class="text-black font-semibold border-b-2 border-white"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Hamburger Button -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-white focus:outline-none"
          >
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <router-link
        v-for="item in menuItems"
        :key="item.name"
        :to="item.path"
        class="block text-gray-700 hover:text-black transition"
        active-class="text-black font-semibold border-b-2 border-white"
        @click="isOpen = false"
      >
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
];
</script>
