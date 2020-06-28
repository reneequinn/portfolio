<template>
  <section id="projects" class="container mx-auto my-6 p-4">
    <div>
      <h3 class="text-2xl font-bold">My Work</h3>
    </div>
    <div>
      <div
        v-for="project in $static.projectList.edges"
        :key="project.node.id"
        class="projectBox lg:flex items-center justify-between rounded bg-gray-900"
      >
        <div class="lg:w-1/4 overflow-hidden">
          <g-image
            :src="project.node.imgUrl"
            :alt="project.node.imgAlt"
          ></g-image>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  projectList: allProjectList(order: ASC) {
    edges {
      node {
        id,
        name,
        tags,
        description,
        imgUrl,
        imgAlt,
        demoUrl
      }
    }
  }
}
</static-query>

<script>
export default {};
</script>

<style>
.projectBox:nth-of-type(2) {
  @apply flex-row-reverse;
}
</style>
