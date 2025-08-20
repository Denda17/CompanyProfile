<!-- <script setup>
import { RouterLink, RouterView } from "vue-router";
</script> -->

<template>
  <div>
    <Navbar />
    <div class="pt-20 p-6">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from "./pages/Navbar.vue";
</script>

<!-- <style scoped></style> -->
