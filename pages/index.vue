<template>
  <v-banner width="100%" max-width="450px" color="secondary" dark rounded>
    <span>Under construction</span>
  </v-banner>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'
import { useHead } from '~/compositions/head'

export default defineComponent({
  setup() {
    useHead(routes.dashboard)
  },
  head: {},
})
</script>
