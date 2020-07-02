<template>
  <section id="portfolio" class="container mx-auto lg:my-6 p-4">
    <div class="text-center">
      <h3 class="text-2xl font-bold mb-4">My Work</h3>
    </div>
    <div class="mt-4">
      <div
        v-for="project in $static.projectList.edges"
        :key="project.node.id"
        class="projectBox xl:flex items-center justify-between bg-gray-900 mb-6 rounded"
      >
        <div class="overflow-hidden xl:w-1/2">
          <g-image
            :src="require(`!!assets-loader!@img/${project.node.imgFile}`)"
            :alt="project.node.imgAlt"
          />
        </div>
        <div class="py-4 px-6 xl:w-1/2">
          <h4 class="text-xl font-bold mb-2">{{ project.node.name }}</h4>
          <ul class="flex items-start justify-start flex-wrap mb-2">
            <li
              v-for="tag in project.node.tags"
              :key="tag"
              class="mr-2 mb-2 px-3 py-1 text-black bg-teal-300 rounded-full text-sm flex-grow-0"
            >
              {{ tag }}
            </li>
          </ul>
          <p
            v-for="desc in project.node.description"
            :key="desc"
            class="mb-2 text-gray-100 text-sm"
          >
            {{ desc }}
          </p>
          <a
            :href="project.node.demoUrl"
            class="btn-gradient inline-block text-black font-bold tracking-wider uppercase rounded mt-2 px-3 py-1"
            target="_blank"
            >Visit site</a
          >
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
        imgFile,
        imgAlt,
        demoUrl
      }
    }
  }
}
</static-query>

<style>
.projectBox:nth-of-type(2) {
  @apply flex-row-reverse;
}
</style>
