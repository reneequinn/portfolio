<template>
  <section id="contact" class="container mx-auto lg:my-6 p-4">
    <div class="mb-4 text-center">
      <h3 class="text-2xl font-bold mb-4">Contact</h3>
      <p class="text-gray-100 mb-2">
        To get in touch, email me:
        <a
          href="mailto:hello@reneequinn.dev"
          class="text-pink-400 underline hover:text-pink-500 transition ease-in duration-200"
          target="_blank"
          rel="noopener noreferrer"
          >hello[at]reneequinn.dev</a
        >
      </p>
      <p class="text-gray-100">
        For social media, check out these links:
      </p>
      <div class="mx-auto text-center max-w-sm flex justify-center my-4">
        <a
          v-for="link in $static.contactList.edges"
          :key="link.node.id"
          :href="link.node.link"
          :aria-label="link.node.label"
          class="mx-2 p-1 hover:text-gray-300 transition ease-in duration-200"
          target="_blank"
          :rel="link.node.rel"
        >
          <component :is="link.node.icon" class="w-8 h-8 fill-current" />
        </a>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  contactList: allContactList (order: ASC, filter: {label: {nin: "Email Me"}}) {
    edges {
      node {
        label
        icon
        link
        rel
      }
    }
  }
}
</static-query>

<script>
import IconGithub from './icons/IconGithub.vue';
import IconCodepen from './icons/IconCodepen.vue';
import IconYoutube from './icons/IconYoutube.vue';
import IconLinkedin from './icons/IconLinkedin.vue';

export default {
  components: {
    IconGithub,
    IconCodepen,
    IconYoutube,
    IconLinkedin,
  },
};
</script>
