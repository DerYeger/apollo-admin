<template>
  <span>Under construction</span>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  head() {
    const title = this.$t(routes.dashboard.title) as string
    return {
      title,
    }
  },
})
</script>
