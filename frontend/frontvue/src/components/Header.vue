<template>
  <div>
    <!-- Topbar -->
    <nav
      class="
        navbar navbar-expand navbar-light
        bg-white
        topbar
        mb-4
        static-top
        shadow
      "
    >
      <!-- Topbar Navbar -->
      <ul class="navbar-nav ml-auto">
        <!-- Nav Item - User Information -->
        <li class="nav-item dropdown no-arrow">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i @click="cerrarSesion()" class="fas fa-sign-out-alt fa-2x"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {
      user: {},
      loaded: false,
    };
  },
  methods: {
    cerrarSesion() {
      window.localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>


<style>
</style>
