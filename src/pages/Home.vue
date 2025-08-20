<template>
  <div>
    <!-- Hero / Identitas Toko -->
    <section class="relative bg-pink-100">
      <div
        class="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center"
      >
        <!-- Text -->
        <div class="flex-1 text-center md:text-left">
          <h1
            class="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
          >
            <span class="text-pink-600">BeautyGlow</span> Cosmetics
          </h1>
          <p class="mt-4 text-lg text-gray-700">
            Toko kosmetik terpercaya yang menyediakan berbagai produk
            kecantikan, mulai dari make-up, skincare, hingga parfum premium.
            Hadir untuk membuatmu lebih percaya diri setiap hari 💄✨
          </p>
          <div class="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="#products"
              class="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
            >
              Belanja Sekarang
            </a>
            <router-link
              to="/about"
              class="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              Tentang Kami
            </router-link>
          </div>
        </div>

        <!-- Image -->
        <div class="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2014/02/13/07/31/department-store-265135_1280.jpg"
            alt="Cosmetics"
            class="w-80 md:w-[28rem] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Product List -->
    <section id="products" class="flex flex-col items-center p-6">
      <h2 class="text-3xl text-center font-bold mb-6">Daftar Produk</h2>

      <!-- Search Column -->
      <input
        v-model="search"
        type="text"
        placeholder="Cari produk kosmetik..."
        class="mb-6 px-4 py-2 border rounded w-full max-w-md"
      />

      <!-- Loading -->
      <div v-if="loading" class="text-gray-600">Loading products...</div>

      <!-- Error -->
      <div v-if="error" class="text-red-500">{{ error }}</div>

      <!-- Product Grid -->
      <div
        v-if="!loading && !error"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="product in paginatedProducts"
          :key="product.id"
          class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ product.title }}</h3>
            <p class="text-gray-600 text-sm truncate">
              {{ product.description }}
            </p>
            <p class="text-pink-600 font-bold mt-2">Rp {{ product.price }}</p>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div
        v-if="totalPages > 1"
        class="flex items-center space-x-2 mt-8 flex-wrap justify-center"
      >
        <!-- Prev -->
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>

        <!-- Page Numbers -->
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-4 py-2 rounded-full border transition',
            currentPage === page
              ? 'bg-pink-600 text-white border-pink-600'
              : 'border-gray-300 hover:bg-gray-100',
          ]"
        >
          {{ page }}
        </button>

        <!-- Next -->
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-pink-50 py-16 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Tentang BeautyGlow
        </h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          BeautyGlow Cosmetics berdiri sejak 2020 dan berkomitmen menyediakan
          produk kosmetik berkualitas dengan harga terjangkau. Kami percaya
          bahwa setiap orang berhak tampil cantik dan percaya diri.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const products = ref([]);
const loading = ref(true);
const error = ref(null);
const search = ref("");

const currentPage = ref(1);
const itemsPerPage = ref(8); // jumlah produk per halaman

onMounted(async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    products.value = data.products;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

const filteredProducts = computed(() => {
  if (!search.value) return products.value;
  const keyword = search.value.toLowerCase();
  return products.value.filter(
    (product) =>
      product.title.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword)
  );
});

const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / itemsPerPage.value)
);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredProducts.value.slice(start, end);
});

function goToPage(page) {
  currentPage.value = page;
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}
</script>
