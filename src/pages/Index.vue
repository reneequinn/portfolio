<template>
  <Layout>
    <Hero />
    <About />
    <Projects />
  </Layout>
</template>

<script>
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    Hero,
    About,
    Projects,
  },
};
</script>

<style></style>
