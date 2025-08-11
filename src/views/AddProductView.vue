<template>
  <div class="p-6 max-w-3xl mx-auto">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-4">Add New Product</h2>

        <form @submit.prevent="submitProduct" class="space-y-4">
          <!-- Title -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Product Title</span>
            </label>
            <input
              type="text"
              v-model="product.title"
              placeholder="Enter product title"
              class="input input-bordered w-full"
              required
            />
          </div>

          <!-- Price -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              v-model="product.price"
              placeholder="Enter price"
              class="input input-bordered w-full"
              required
              step="0.01"
              min="0"
            />
          </div>

          <!-- Category -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Category</span>
            </label>
            <select
              v-model="product.category"
              class="select select-bordered w-full"
              required
            >
              <option disabled value="">Select category</option>
              <option>electronics</option>
              <option>jewelery</option>
              <option>men's clothing</option>
              <option>women's clothing</option>
            </select>
          </div>

          <!-- Description -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Description</span>
            </label>
            <textarea
              v-model="product.description"
              placeholder="Write product description"
              class="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>

          <!-- Image URL -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Image URL</span>
            </label>
            <input
              type="url"
              v-model="product.image"
              placeholder="https://example.com/image.jpg"
              class="input input-bordered w-full"
              required
            />
          </div>

          <!-- Preview -->
          <div v-if="product.image" class="mt-4">
            <p class="font-semibold mb-2">Image Preview:</p>
            <img
              :src="product.image"
              alt="Preview"
              class="w-48 h-48 object-contain rounded border"
            />
          </div>

          <!-- Buttons -->
          <div class="card-actions justify-end mt-6">
            <button type="button" class="btn btn-outline" @click="resetForm">
              Reset
            </button>
            <button type="submit" class="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="toastMessage" class="toast toast-top toast-center">
      <div class="alert alert-success">
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
      },
      toastMessage: "",
    };
  },
  methods: {
    async submitProduct() {
      try {
        store.commit("addProduct", this.product);
        this.toastMessage = "Product added successfully!";
        setTimeout(() => {
          this.$router.push("/products");
          this.toastMessage = "";
        }, 1500);

        this.resetForm();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
    resetForm() {
      this.product = {
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
      };
    },
  },
};
</script>
