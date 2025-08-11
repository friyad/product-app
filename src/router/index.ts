import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store";
import ProductsView from "@/views/ProductsView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import AddProductView from "@/views/AddProductView.vue";
import EditProductView from "@/views/EditProductView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Products",
    component: ProductsView,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsView,
  },
  {
    path: "/products/add-product",
    name: "Add Product",
    component: AddProductView,
  },
  { path: "/products/:id", component: ProductDetailsView },
  { path: "/products/edit/:id", component: EditProductView },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "Log In",
    component: () => import("../views/LogInView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isExist = localStorage.getItem("user");
  const user = isExist ? JSON.parse(isExist) : null;

  if (user && user.isLoggedIn && to.path !== "/login") {
    store.commit("setUser", user);
  }

  if (user && user.isLoggedIn && to.path === "/login") {
    // Logged in user trying to visit login page → go home
    store.commit("setUser", user);
    return next("/");
  }

  if (!user && to.path !== "/login") {
    // Not logged in user trying to access protected route → go login
    store.commit("setUser", { name: "", email: "", isLoggedIn: false });
    return next("/login");
  }

  // Otherwise, proceed as normal
  next();
});

export default router;
