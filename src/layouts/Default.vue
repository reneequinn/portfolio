<template>
  <div class="bg-black text-white antialiased min-h-screen flex flex-col">
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

<style></style>
