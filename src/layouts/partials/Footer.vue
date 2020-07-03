<template>
  <footer class="bg-gray-900">
    <div class="container mx-auto flex items-center justify-between py-6 px-4">
      <div>
        <small
          >&copy; Copyright {{ new Date().getFullYear() }} Renee Quinn</small
        >
      </div>
      <div class="flex justify-between items-center">
        <a
          v-for="link in $static.contactList.edges"
          :key="link.node.id"
          :href="link.node.link"
          :aria-label="link.node.label"
          class="mx-2 p-1 hover:text-gray-300 transition ease-in duration-200"
          target="_blank"
          :rel="link.node.rel"
        >
          <component :is="link.node.icon" class="w-6 h-6 fill-current" />
        </a>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  contactList: allContactList {
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
import IconEnvelope from '../../components/icons/IconEnvelope.vue';
import IconGithub from '../../components/icons/IconGithub.vue';
import IconCodepen from '../../components/icons/IconCodepen.vue';
import IconYoutube from '../../components/icons/IconYoutube.vue';
import IconLinkedin from '../../components/icons/IconLinkedin.vue';

export default {
  components: {
    IconEnvelope,
    IconGithub,
    IconCodepen,
    IconYoutube,
    IconLinkedin,
  },
};
</script>
