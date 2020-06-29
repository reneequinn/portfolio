<template>
  <section id="portfolio" class="container mx-auto lg:mb-6 p-4">
    <div>
      <h3 class="text-2xl font-bold mb-4">My Work</h3>
    </div>
    <div>
      <div
        v-for="project in projectList"
        :key="project.node.id"
        class="projectBox lg:flex items-center justify-between bg-gray-900 mb-4 rounded"
      >
        <div class="overflow-hidden lg:w-1/2">
          <g-image
            :src="require(`!!assets-loader!@img/${project.node.imgFile}`)"
            :alt="project.node.imgAlt"
          />
        </div>
        <div class="py-4 px-6 lg:w-1/2">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projectList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.projectBox:nth-of-type(2) {
  @apply flex-row-reverse;
}
</style>
