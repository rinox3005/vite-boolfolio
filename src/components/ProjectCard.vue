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
        src="/img/project-placeholder.png"
        :alt="project.title"
        class="img-fluid mb-3" />
      <h3 class="card-title fw-bold">{{ project.title }}</h3>
      <p class="card-text"><strong>Type: </strong>{{ project.type.name }}</p>
      <a
        :href="project.link_to_website"
        class="btn btn-primary"
        v-if="project.link_to_website"
        >Visit</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
