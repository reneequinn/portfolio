<template>
  <section id="about" class="container mx-auto my-6 p-4">
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
    <div class="my-6">
      <div>
        <h3 class="text-2xl font-bold mb-4">My Skills</h3>
      </div>
      <div class="lg:grid grid-cols-2 gap-4">
        <div v-for="skill in skills.list" :key="skill" class="mb-4">
          <h4 class="text-xl font-bold text-gray-100 mb-2">{{ skill.name }}</h4>
          <ul class="flex flex-wrap">
            <li
              v-for="item in skill.items"
              :key="item"
              class="mr-2 mb-2 px-3 py-1 text-black bg-teal-300 rounded-full text-sm"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import skills from '@/data/skills.json';
export default {
  data() {
    return {
      skills,
    };
  },
};
</script>
