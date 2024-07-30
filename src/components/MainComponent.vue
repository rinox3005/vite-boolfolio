<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "MainComponent",
  data() {
    return {
      store,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      const params = {};

      axios.get(this.store.apiUrl, { params }).then((response) => {
        // console.log(response);
        this.store.projects = response.data.results;
        // console.log(this.store.projects);
      });
    },
  },
  components: {},
};
</script>

<template>
  <main>
    <h1>Main</h1>
  </main>
</template>

<style lang="scss" scoped></style>
