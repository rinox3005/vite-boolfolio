<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card mb-4">
    <div class="card-body text-center">
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
      <h3 class="card-title fw-bold">{{ project.title }}</h3>
      <p class="card-text"><strong>Type: </strong>{{ project.type.name }}</p>

      <router-link
        :to="{ name: 'details', params: { slug: project.slug } }"
        class="btn btn-primary"
        ><i class="fas fa-eye me-2"></i>Details</router-link
      >
      <a
        :href="project.link_to_website"
        class="btn btn-danger ms-2"
        v-if="project.link_to_website"
        ><i class="fas fa-globe me-2"></i>Visit</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
