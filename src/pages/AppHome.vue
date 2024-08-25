<script>
export default {
  name: "AppHome",
};
</script>

<template>
  <div class="container">
    <h2>Home Page</h2>

    <router-link :to="{ name: 'projects' }" class="btn btn-primary"
      >My projects</router-link
    >
  </div>
</template>

<style lang="scss" scoped></style>
