<template>
  <v-app>
    <v-app-bar :clipped-left="true" app color="primary" dark dense fixed>
      <logo class="ml-lg-n2" />
      <v-spacer />
      <theme-toggle />
    </v-app-bar>
    <v-main>
      <v-container class="page-container" :class="{ 'bound-width': layout === 'compact', 'unbound-width': layout === 'fill' }">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapState } from 'vuex'

export default defineComponent({
  head() {
    const path = this.$route.path
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      link: [
        {
          rel: 'canonical',
          href: `https://apollo-admin.yeger.eu${path.length > 1 ? path : ''}/`.replace('//', '/'),
        },
      ],
    }
  },
  computed: mapState('settings', ['layout']),
})
</script>
