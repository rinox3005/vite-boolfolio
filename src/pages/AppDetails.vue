<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "AppDetails",
  data() {
    return {
      store,
      project: null,
      error: false,
    };
  },
  methods: {
    getProjectDetails() {
      axios
        .get(
          this.store.apiUrl +
            this.store.endPoints.projectsList +
            "/" +
            this.$route.params.slug
        )
        .then((response) => {
          console.log(response);
          this.project = response.data.results;
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        });
    },
  },
  created() {
    this.getProjectDetails();
  },
};
</script>

<template>
  <div class="container mb-5">
    <h2 class="my-4 display-4 fw-semibold text-center">{{ project.title }}</h2>
    <img
      v-if="project.preview_path"
      :src="`http://127.0.0.1:8000/${project.preview_path}`"
      :alt="project.title"
      class="img-fluid mb-3" />
    <img
      v-else
      src="/img/project-placeholder.png"
      :alt="project.title"
      class="img-fluid mb-3" />

    <h4 class="fw-bold">Description:</h4>
    <p>{{ project.description }}</p>

    <h4 class="fw-bold">Key Features:</h4>
    <p>{{ project.key_features }}</p>

    <router-link :to="{ name: 'projects' }" class="btn btn-primary"
      ><i class="fas fa-chevron-left me-3"></i>Back to projects</router-link
    >
    <a
      :href="project.link_to_website"
      class="btn btn-danger ms-2"
      v-if="project.link_to_website"
      ><i class="fas fa-globe me-2"></i>Visit</a
    >
  </div>
</template>

<style lang="scss" scoped></style>
