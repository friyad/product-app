<template>
  <div>
    <div v-if="showToast" class="toast toast-top toast-center">
      <div class="alert alert-success">
        <span>Log In successfully.</span>
      </div>
    </div>

    <div class="min-h-screen flex items-center justify-center bg-base-200">
      <div class="card w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-center">Login</h2>

          <form @submit.prevent="login">
            <!-- Email -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                v-model="email"
                placeholder="email@example.com"
                class="input input-bordered"
                required
              />
            </div>

            <!-- Password -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                v-model="password"
                placeholder="••••••••"
                class="input input-bordered"
                required
              />
            </div>

            <!-- Submit -->
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>

          <p class="text-center mt-4 text-sm">
            Don’t have an account?
            <a href="#" class="link link-primary">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "LoginView",
  data() {
    return {
      showToast: false,
    };
  },
  methods: {
    login() {
      store.commit("setUser", {
        email: this.email,
        password: this.password,
        isLoggedIn: true,
      });
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
        this.$router.push({ path: "/" });
      }, 2000);
    },
  },
};
</script>
