<template>
  <header class="bg-gray-900 sticky shadow">
    <div class="header-border"></div>
    <div
      class="container mx-auto flex flex-wrap justify-between items-center py-6 px-4"
    >
      <g-link
        to="/"
        class="text-xl font-bold border-b-2 border-transparent transition-colors ease-in duration-200 hover:border-white"
      >
        <h1><span class="text-pink-400">Renee </span><span>Quinn</span></h1>
      </g-link>
      <div class="block lg:hidden">
        <button
          @click="toggleMenu"
          :class="{ open: isOpen }"
          class="nav-button"
          aria-label="menu"
          aria-controls="navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
        id="navigation"
      >
        <ul class="items-center ml-auto text-center lg:flex">
          <li class="my-3 lg:my-0 lg:mr-8">
            <a
              href="/"
              vue-scroll-to="'/'"
              class="block bg-gray-800 py-1 rounded border-b-2 border-transparent transition-colors ease-in duration-200 hover:bg-gray-900 lg:rounded-none lg:hover:border-white lg:inline-block lg:bg-transparent lg:py-0"
              >Home</a
            >
          </li>
          <li class="my-3 lg:my-0 lg:mr-8">
            <a
              href="#about"
              vue-scroll-to="'#about'"
              class="block bg-gray-800 py-1 rounded border-b-2 border-transparent transition-colors ease-in duration-200 hover:bg-gray-900 lg:rounded-none lg:hover:border-white lg:inline-block lg:bg-transparent lg:py-0"
              >About</a
            >
          </li>
          <li class="my-3 lg:my-0 lg:mr-8">
            <a
              href="#portfolio"
              vue-scroll-to="'#portfolio'"
              class="block bg-gray-800 py-1 rounded border-b-2 border-transparent transition-colors ease-in duration-200 hover:bg-gray-900 lg:rounded-none lg:hover:border-white lg:inline-block lg:bg-transparent lg:py-0"
              >Portfolio</a
            >
          </li>
          <li class="my-3 lg:my-0">
            <a
              href="#contact"
              vue-scroll-to="'#contact'"
              class="block bg-gray-800 py-1 rounded border-b-2 border-transparent transition-colors ease-in duration-200 hover:bg-gray-900 lg:rounded-none lg:hover:border-white lg:inline-block lg:bg-transparent lg:py-0"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.header-border {
  padding: 2px;
  background: linear-gradient(to right, #f687b3, #b794f4, #4fd1c5);
}

.nav-button {
  width: 30px;
  height: 24px;
  position: relative;
}

.nav-button span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #fff;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transform-origin: left center;
  transition: 0.25s ease-in-out;
}

.nav-button:hover span {
  background: #f5f5f5;
}

.nav-button span:nth-child(1) {
  top: 0px;
}

.nav-button span:nth-child(2) {
  top: 10px;
}

.nav-button span:nth-child(3) {
  top: 20px;
}

.nav-button.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 4px;
}

.nav-button.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.nav-button.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 21px;
  left: 4px;
}
</style>
