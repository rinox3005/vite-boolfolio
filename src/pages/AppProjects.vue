<script>
import axios from "axios";
import { store } from "../store";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "AppProjects",
  data() {
    return {
      store,
      currentPage: 1,
      totalPages: 1,
      page: 1,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects(page) {
      const params = { page };

      axios.get(this.store.apiUrl, { params }).then((response) => {
        // console.log(response);
        this.store.projects = response.data.results.data;
        this.currentPage = response.data.results.current_page;
        this.totalPages = response.data.results.last_page;
        // console.log(this.store.projects);
      });
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.getProjects(page);
      }
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
      <div class="row justify-content-center">
        <div
          class="col-sm-6 col-md-4 col-lg-3"
          v-for="project in store.projects"
          :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination d-flex justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a
              class="page-link"
              href="#"
              @click.prevent="goToPage(currentPage - 1)"
              >Previous</a
            >
          </li>
          <li
            class="page-item"
            :class="{ active: currentPage === pageNumber }"
            v-for="pageNumber in totalPages"
            :key="pageNumber">
            <a
              class="page-link"
              href="#"
              @click.prevent="goToPage(pageNumber)"
              >{{ pageNumber }}</a
            >
          </li>
          <li
            class="page-item"
            :class="{ disabled: currentPage === totalPages }">
            <a
              class="page-link"
              href="#"
              @click.prevent="goToPage(currentPage + 1)"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
