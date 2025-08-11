<template>
  <div class="p-6 max-w-3xl mx-auto">
    <div v-if="toastMessage !== ''" class="toast toast-top toast-center">
      <div class="alert alert-success">
        <span>Log In successfully.</span>
      </div>
    </div>
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-4">Edit Product</h2>

        <form @submit.prevent="updateProduct" class="space-y-4">
          <!-- Title -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Product Title</span>
            </label>
            <input
              type="text"
              v-model.trim="form.title"
              class="input input-bordered w-full"
              :class="{ 'input-error': errors.title }"
              placeholder="Enter product title"
              required
            />
            <p v-if="errors.title" class="text-error text-sm mt-1">
              {{ errors.title }}
            </p>
          </div>

          <!-- Price -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              v-model.number="form.price"
              class="input input-bordered w-full"
              :class="{ 'input-error': errors.price }"
              placeholder="Enter price"
              min="0"
              step="0.01"
              required
            />
            <p v-if="errors.price" class="text-error text-sm mt-1">
              {{ errors.price }}
            </p>
          </div>

          <!-- Category -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Category</span>
            </label>
            <select
              v-model="form.category"
              class="select select-bordered w-full"
              :class="{ 'select-error': errors.category }"
              required
            >
              <option disabled value="">Select category</option>
              <option>electronics</option>
              <option>jewelery</option>
              <option>men's clothing</option>
              <option>women's clothing</option>
            </select>
            <p v-if="errors.category" class="text-error text-sm mt-1">
              {{ errors.category }}
            </p>
          </div>

          <!-- Description -->
          <div>
            <label class="label">
              <span class="label-text font-semibold">Description</span>
            </label>
            <textarea
              v-model.trim="form.description"
              class="textarea textarea-bordered w-full"
              :class="{ 'textarea-error': errors.description }"
              rows="4"
              placeholder="Write product description"
              required
            ></textarea>
            <p v-if="errors.description" class="text-error text-sm mt-1">
              {{ errors.description }}
            </p>
          </div>

          <!-- Image URL -->
          <div>
            <input
              type="text"
              v-model="form.image"
              placeholder="Type here"
              class="input"
            />
          </div>

          <!-- Submit Button -->
          <div class="card-actions justify-end">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="
                !form.title ||
                !form.price ||
                !form.category ||
                !form.description
              "
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "EditProduct",
  data() {
    return {
      form: {
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
      },
      errors: {},
      toastMessage: "",
    };
  },
  computed: {},
  created() {
    const productId = this.$route.params.id;
    const product = this.$store.state.products.find(
      (p) => p.id === parseInt(productId)
    );
    if (product) {
      this.form = { ...product };
    } else {
      this.$router.push("/products");
    }
  },
  methods: {
    updateProduct() {
      this.errors = {};

      // If there are errors, do not proceed
      if (Object.keys(this.errors).length > 0) {
        return;
      }

      // Update product in the store
      const productId = this.$route.params.id;
      store.commit("updateProduct", {
        id: parseInt(productId),
        ...this.form,
      });

      // Show success message
      this.toastMessage = "Product updated successfully!";
      setTimeout(() => {
        this.toastMessage = "";
        this.$router.push("/products");
      }, 2000);
    },
  },
};
</script>
