<script>
export default {
  name: "AppDetails",
};
</script>

<template>
  <div class="container">
    <h2>Dettagli progetto</h2>

    <router-link :to="{ name: 'projects' }" class="btn btn-primary"
      >Back to projects</router-link
    >
  </div>
</template>

<style lang="scss" scoped></style>
