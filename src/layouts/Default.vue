<template>
  <div class="bg-gray-950 text-white antialiased min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow px-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './partials/Header';
import Footer from './partials/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.btn-gradient {
  background-image: linear-gradient(to bottom right, #f687b3, #b794f4, #4fd1c5);
  position: relative;
  z-index: 1;
}

.btn-gradient:before {
  background-image: linear-gradient(to top right, #f687b3, #b794f4, #4fd1c5);
  content: '';
  display: block;
  position: absolute;
  border-radius: inherit;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease-in;
}

.btn-gradient:hover:before {
  opacity: 1;
}
</style>
