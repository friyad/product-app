<template>
  <div class="max-w-6xl mx-auto px-4 py-6">
    <div class="flex justify-between items-center mb-4">
      <div>
        <h1 class="text-2xl font-bold mb-1">Products</h1>
        <p class="text-sm text-gray-600 mb-3">
          Browse our collection of products. Click on a product to view details
          or edit.
        </p>
      </div>
      <div class="flex justify-end">
        <router-link to="/products/add-product" class="btn btn-primary">
          Add New Product
        </router-link>
      </div>
    </div>

    <div class="mb-5 flex items-center justify-between">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by title..."
        class="input"
      />

      <div>
        <select class="select select-bordered w-full max-w-xs mt-2">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>
    </div>

    <hr class="mb-5 mt-3 border-black/10" />

    <div v-if="loading" class="flex justify-center items-center min-h-[200px]">
      <span class="loading loading-spinner loading-lg"></span>
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard
        v-for="product in this.$store.state.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import store from "@/store";

export default {
  name: "ProductCardGrid",
  components: {
    ProductCard,
  },
  data() {
    return {
      loading: true,
      searchQuery: "",
    };
  },
  mounted() {
    if (store.state.products.length === 0) {
      this.fetchProducts();
    } else {
      this.loading = false;
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        store.commit("setProducts", data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
