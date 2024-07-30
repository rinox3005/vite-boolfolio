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
            <h3 class="fw-bold mb-0 ms-2">My Projects</h3>
          </div>
        </a>

        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav fw-semibold me-auto mt-1">
            <li class="nav-item">
              <a class="nav-link" href="/"> Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Projects </a>
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
