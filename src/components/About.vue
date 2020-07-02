<template>
  <section id="about" class="container mx-auto lg:my-6 p-4">
    <div class="lg:grid grid-cols-4 gap-4">
      <div
        class="my-6 col-span-1 flex items-center justify-center lg:justify-start"
      >
        <g-image
          src="../assets/img/profile-bw.jpg"
          alt="Image of Renee Quinn"
          class="rounded-full w-64"
        ></g-image>
      </div>
      <div class="my-6 col-span-3 flex flex-col justify-center">
        <h3 class="text-2xl font-bold">Hi, I'm Renee</h3>
        <p class="mt-4 text-gray-100">
          I'm a front end developer with a passion for well-designed user
          experiences on the web. I specialise in HTML, CSS and JavaScript, and
          love using VueJS and Tailwind CSS. In addition to developing web apps,
          I plan and design user interfaces with Adobe XD.
        </p>
        <p class="mt-2 text-gray-100">
          When I'm not coding or designing, I play video games, wrangle two
          kittens, try to keep potted plants alive and cook. I'm always on the
          lookout for my new favourite meal to make!
        </p>
      </div>
    </div>
    <div class="mt-6">
      <div class="text-center">
        <h3 class="text-2xl font-bold">My Skills</h3>
      </div>

      <div class="lg:grid grid-cols-2 gap-4">
        <div
          v-for="skill in $static.skillsList.edges"
          :key="skill.node.id"
          class="my-4"
        >
          <div class="grid grid-cols-4 gap-4">
            <div class="col-span-1 flex items-center justify-center">
              <component
                :is="skill.node.icon"
                class="stroke-current text-gray-700 w-32 h-32"
              />
            </div>
            <div class="col-span-3 text-center md:text-left">
              <h4 class="text-xl font-bold text-gray-100 mb-2">
                {{ skill.node.name }}
              </h4>
              <ul
                class="flex items-start justify-center md:justify-start flex-wrap"
              >
                <li
                  v-for="item in skill.node.items"
                  :key="item"
                  class="mr-2 mb-2 px-3 py-1 text-black bg-teal-300 rounded-full text-sm flex-grow-0"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  skillsList: allSkillsList (order: ASC) {
    edges {
      node {
        id,
        name,
        icon,
        items
      }
    }
  }
}
</static-query>

<script>
import IconBrowser from './icons/IconBrowser.vue';
import IconCoding from './icons/IconCoding.vue';
import IconDesign from './icons/IconDesign.vue';
import IconSettings from './icons/IconSettings.vue';

export default {
  components: {
    IconBrowser,
    IconCoding,
    IconDesign,
    IconSettings,
  },
};
</script>
