<template>
  <div class="flex flex-col items-center p-6">
    <h1 class="text-3xl text-center font-bold mb-6">Product List</h1>

    <!-- Search Column -->
    <input
      v-model="search"
      type="text"
      placeholder="Search products..."
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
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
        @click="showPreview(product)"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-lg font-semibold">{{ product.title }}</h2>
          <p class="text-gray-600 text-sm truncate">
            {{ product.description }}
          </p>
          <p class="text-blue-600 font-bold mt-2">$ {{ product.price }}</p>
        </div>
      </div>
    </div>

    <!-- Product Preview Modal -->
    <div
      v-if="previewProduct"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="closePreview"
    >
      <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          @click="closePreview"
        >
          &times;
        </button>
        <img
          :src="previewProduct.thumbnail"
          :alt="previewProduct.title"
          class="w-full h-56 object-cover rounded mb-4"
        />
        <h2 class="text-2xl font-bold mb-2">{{ previewProduct.title }}</h2>
        <p class="text-gray-700 mb-2">{{ previewProduct.description }}</p>
        <p class="text-blue-600 font-bold text-lg mb-2">
          $ {{ previewProduct.price }}
        </p>
        <div class="flex flex-wrap gap-2 mb-2">
          <span
            v-for="tag in previewProduct.tags || []"
            :key="tag"
            class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
            >{{ tag }}</span
          >
        </div>
        <div
          v-if="previewProduct.images && previewProduct.images.length > 1"
          class="flex gap-2 mt-2"
        >
          <img
            v-for="img in previewProduct.images"
            :key="img"
            :src="img"
            class="w-16 h-16 object-cover rounded border"
            :alt="previewProduct.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const products = ref([]);
const loading = ref(true);
const error = ref(null);
const search = ref("");
const previewProduct = ref(null);

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

function showPreview(product) {
  previewProduct.value = product;
}

function closePreview() {
  previewProduct.value = null;
}
</script>
