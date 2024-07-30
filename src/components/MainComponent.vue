<script>
import axios from "axios";
import { store } from "../store";
import ProjectCard from "./ProjectCard.vue";
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
  components: {
    ProjectCard,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1 class="my-4">My Projects</h1>
      <div class="row">
        <div
          class="col-sm-6 col-md-4 col-lg-3"
          v-for="project in store.projects"
          :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
