<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawerOpen"
      fixed
      app
      :permanent="$vuetify.breakpoint.lgAndUp"
      :clipped="true"
    >
      <app-sidebar />
    </v-navigation-drawer>
    <app-header v-model="drawerOpen" />
    <v-main>
      <v-container
        class="page-container"
        :class="{
          'bound-width': layout === 'compact',
          'unbound-width': layout === 'fill',
        }"
      >
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapState } from 'vuex'

export default defineComponent({
  data() {
    return {
      drawerOpen: false,
    }
  },
  head() {
    const path = this.$route.path
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      link: [
        {
          rel: 'canonical',
          href: `https://apollo-admin.yeger.eu${
            path.length > 1 ? path : ''
          }/`.replace('//', '/'),
        },
      ],
    }
  },
  computed: mapState('settings', ['layout']),
})
</script>
