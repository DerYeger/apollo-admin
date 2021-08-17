<template>
  <v-list-item-group color="info">
    <v-subheader>{{ $t('misc.resources') }}</v-subheader>
    <v-list-item class="text--primary" rel="noopener" href="https://github.com/DerYeger/apollo-admin" target="_blank" input-value="false">
      <v-list-item-icon>
        <v-icon class="text--secondary">{{ mdiGithub }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          GitHub Repository
          <v-icon small class="text--secondary">{{ mdiOpenInNew }}</v-icon>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>

<script lang="ts">
import { mdiGithub, mdiOpenInNew } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      mdiGithub,
      mdiOpenInNew,
    }
  },
})
</script>
