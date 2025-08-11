<template>
  <div
    class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
  >
    <router-link :to="`/products/${product.id}`" class="block">
      <figure class="px-6 pt-6">
        <img
          :src="product.image"
          :alt="product.title"
          class="rounded-xl h-48 object-contain"
        />
      </figure>
    </router-link>

    <div class="card-body">
      <h2 class="card-title text-lg line-clamp-2">{{ product.title }}</h2>
      <p class="text-sm opacity-70 capitalize">{{ product.category }}</p>
      <p class="text-lg font-bold">{{ formatPrice(product.price) }}</p>

      <div class="card-actions justify-between mt-2">
        <router-link
          :to="`/products/edit/${product.id}`"
          class="btn btn-primary btn-sm"
        >
          Edit
        </router-link>
        <button class="btn btn-error btn-sm" @click="handleDelete">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "ProductTable",
  props: {
    product: {},
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },

    handleDelete() {
      const confirm = window.confirm(
        `Are you sure you want to delete Product: ${this.product.id}?`
      );
      if (!confirm) return;
      store.commit("deleteProduct", this.product.id);
    },
  },
};
</script>

<style></style>
