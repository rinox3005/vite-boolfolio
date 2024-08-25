<script>
export default {
  name: "AppAbout",
};
</script>

<template>
  <div class="container my-5">
    <h2 class="text-center mb-4 display-5 fw-semibold">About Me</h2>
    <p class="fw-semibold fs-5">
      I am Giuseppe Rinaldi, a dedicated Full-Stack Web Developer with a keen
      eye for detail and a problem-solving mindset. I am passionate about
      delivering high-quality, scalable solutions that enhance user experiences.
      I thrive in collaborative environments and am committed to continuous
      learning and innovation.
    </p>
    <p class="fw-semibold fs-5">
      My journey in web development has equipped me with a strong foundation in
      both front-end and back-end technologies. I have completed an intensive
      full-time course at Boolean Careers, where I honed my skills in various
      programming languages and frameworks, working on real-world projects.
    </p>
    <p class="fw-semibold fs-5">
      I have also gained experience in social media management, graphic design,
      and client relations through various roles over the years. My diverse
      background allows me to approach projects with a well-rounded perspective,
      ensuring that both technical and creative aspects are covered.
    </p>

    <h3 class="fw-semibold display-6 text-center mb-4">Skills</h3>
    <div class="row text-center">
      <div class="col-6">
        <ul class="fw-semibold">
          <li>HTML5, CSS3 (SCSS, SASS), JavaScript</li>
          <li>Vue.js, Bootstrap 5, Node.js, Vite</li>
          <li>PHP, Laravel, MySQL</li>
        </ul>
      </div>
      <div class="col-6">
        <ul class="fw-semibold">
          <li>Git, NPM, Composer</li>
          <li>REST API, Axios, Postman</li>
          <li>Graphic Design, Social Media Management</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="text-center mt-5">
    <router-link :to="{ name: 'projects' }" class="btn btn-primary btn-lg">
      My Projects
    </router-link>
  </div>
</template>

<style lang="scss" scoped></style>
