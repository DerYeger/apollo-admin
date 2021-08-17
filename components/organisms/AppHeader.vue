<template>
  <v-app-bar :clipped-left="true" app color="primary" dark dense fixed>
    <v-app-bar-nav-icon
      v-show="$vuetify.breakpoint.mdAndDown"
      :aria-label="$t(value ? 'actions.close-menu' : 'actions.open-menu')"
      class="ml-n4"
      @click="$emit('input', !value)"
    >
      <v-icon>{{ mdiMenu }}</v-icon>
    </v-app-bar-nav-icon>
    <logo class="ml-lg-n2" />
    <v-spacer />
    <language-menu />
    <theme-toggle />
  </v-app-bar>
</template>

<script lang="ts">
import { mdiMenu } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mdiMenu,
    }
  },
})
</script>
