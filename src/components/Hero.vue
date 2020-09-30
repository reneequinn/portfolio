<template>
  <section id="home" class="container mx-auto flex my-6 p-4">
    <div class="lg:grid grid-cols-2 gap-4">
      <div
        class="my-6 text-center lg:text-left flex flex-col justify-center px-4 lg:px-0"
      >
        <h2 class="text-5xl font-bold leading-none tracking-tight">
          I make <span class="text-pink-400">awesome</span> web experiences
        </h2>
        <h3 class="text-xl text-gray-300 mt-4">
          Front-end web development and UI/UX design
        </h3>
        <div class="my-6">
          <a
            href="#portfolio"
            v-scroll-to="'#portfolio'"
            class="btn-gradient inline-block text-black font-bold tracking-wider uppercase text-lg rounded px-4 py-2"
          >
            See my work
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center my-6">
        <g-image
          class="w-3/4 md:w-2/3 lg:w-4/5"
          src="../assets/img/iso-laptop.svg"
          alt="Isometric laptop"
        ></g-image>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
