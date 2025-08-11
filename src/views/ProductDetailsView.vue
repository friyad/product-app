<template>
  <div class="p-6">
    <div v-if="loading" class="flex justify-center items-center min-h-[300px]">
      <span class="loading loading-spinner loading-lg"></span>
    </div>

    <div
      v-else-if="product"
      class="card lg:card-side bg-base-100 shadow-xl max-w-5xl mx-auto"
    >
      <!-- Image -->
      <figure class="lg:w-1/2 p-6">
        <img
          :src="product.image"
          :alt="product.title"
          class="rounded-xl object-contain max-h-[400px] w-full"
        />
      </figure>

      <!-- Details -->
      <div class="card-body lg:w-1/2">
        <h2 class="card-title text-2xl font-bold">{{ product.title }}</h2>
        <p class="text-sm opacity-70 capitalize">{{ product.category }}</p>

        <p class="mt-4 leading-relaxed">
          {{ product.description }}
        </p>

        <div class="mt-6 text-2xl font-bold text-primary">
          {{ formatPrice(product.price) }}
        </div>

        <div class="card-actions justify-end mt-8">
          <button class="btn btn-primary">Add to Cart</button>
          <router-link to="/products" class="btn btn-outline">Back</router-link>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20 text-lg">Product not found.</div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      product: null,
      loading: true,
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const id = this.$route.params.id; // get from route
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        this.product = await res.json();
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    formatPrice(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
  },
};
</script>
