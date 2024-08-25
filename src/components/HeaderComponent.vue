<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="d-flex align-items-center container">
        <a class="navbar-brand d-flex align-items-center" href="/">
          <div class="logo_guest d-flex align-items-center">
            <img
              class="logo-nav-guest"
              src="/img/logo-guest.png"
              alt="logo-guest" />
            <h3 class="fw-bold mb-0 ms-2">Giuseppe Rinaldi</h3>
          </div>
        </a>

        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav fw-semibold me-auto mt-1">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'projects' }" class="nav-link"
                >Projects</router-link
              >
            </li>
          </ul>

          <!-- Right Side Of Navbar -->
          <!-- <ul class="navbar-nav fw-semibold ml-auto mt-1">
            <li class="nav-item">
              <a class="nav-link" href="#"> </a>
            </li>
          </ul> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.logo-nav-guest {
  height: 50px;
}
</style>
