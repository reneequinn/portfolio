<template>
  <Layout>
    <section class="container mx-auto lg:my-6 p-4">
      <div class="text-center">
        <h3 class="text-3xl font-bold mb-4">Page not found</h3>
        <g-link
          to="/"
          class="btn-gradient inline-block text-black font-bold tracking-wider uppercase text-lg rounded px-4 py-2"
          >Return home</g-link
        >
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: { title: 'Page Not Found' },
};
</script>
