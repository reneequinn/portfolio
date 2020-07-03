<template>
  <Layout>
    <section class="max-w-lg mx-auto lg:my-6 p-4">
      <div>
        <h3 class="text-3xl font-bold mb-4">Credits</h3>
        <p class="mb-4">
          Thanks to the following creators for use of their work:
        </p>
        <p
          v-for="credit in $page.creditList.edges"
          :key="credit.node.id"
          class="mb-4"
        >
          <span class="font-bold">{{ credit.node.name }}:</span><br />
          <a
            :href="credit.node.link"
            class="text-pink-400 underline hover:text-pink-500 transition ease-in duration-200"
            target="_blank"
            >{{ credit.node.attribution }}</a
          >
        </p>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  creditList: allCreditList {
    edges {
      node {
        name
        attribution
        link
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Credits',
  },
};
</script>
