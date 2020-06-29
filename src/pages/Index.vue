<template>
  <Layout>
    <Hero />
    <About />
    <Projects :projectList="$page.projectList.edges" />
  </Layout>
</template>

<page-query>
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
</page-query>

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
