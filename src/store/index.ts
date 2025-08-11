import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const store = new Vuex.Store({
  state: {
    user: {
      name: "",
      email: "",
      isLoggedIn: false,
    },
    products: <Product[]>[],
  },
  mutations: {
    setUser(state, user) {
      state.user.name = user.name || "";
      state.user.email = user.email || "";
      state.user.isLoggedIn = user.email ? true : false;

      localStorage.setItem("user", JSON.stringify(state.user));
    },
    clearUser(state) {
      state.user = {
        name: "",
        email: "",
        isLoggedIn: false,
      };
      localStorage.removeItem("user");
    },

    // Add product-related mutations
    setProducts(state, products) {
      state.products = products;
    },
    deleteProduct(state, productId) {
      console.log("Deleting product with ID:", productId);
      state.products = state.products.filter((p) => p.id !== productId);
    },
    clearProducts(state) {
      state.products = [];
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex((p) => p.id === updatedProduct.id);
      if (index !== -1) {
        Vue.set(state.products, index, updatedProduct);
      }
    },
  },

  actions: {},

  getters: {
    isLoggedIn: (state) => state.user.isLoggedIn,
    userName: (state) => state.user.name,
    userEmail: (state) => state.user.email,
  },
});

export default store;
