<template>
  <v-list-item-group color="info">
    <v-subheader>{{ $t('misc.navigation') }}</v-subheader>
    <route-list-item v-for="(route, i) in routes" :key="i" :route="route" />
  </v-list-item-group>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  data() {
    return {
      routes: Object.values(routes),
    }
  },
})
</script>
