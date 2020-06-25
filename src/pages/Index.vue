<template>
  <Layout>
    <Hero />
    <About />
  </Layout>
</template>

<script>
import Hero from '../components/Hero';
import About from '../components/About';
export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    Hero,
    About,
  },
};
</script>

<style></style>
