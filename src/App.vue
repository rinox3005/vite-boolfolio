<script>
import HeaderComponent from "./components/HeaderComponent.vue";
// import FooterComponent from "./components/FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    // FooterComponent,
  },
};
</script>

<template>
  <HeaderComponent />
  <router-view></router-view>
  <!-- <FooterComponent /> -->
</template>

<style lang="scss" scoped></style>
