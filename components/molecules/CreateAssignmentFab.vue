<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        fab
        fixed
        bottom
        right
        color="secondary"
        v-bind="attrs"
        :aria-label="$t('actions.create-assignment')"
        v-on="on"
      >
        <v-icon>{{ mdiPlus }}</v-icon>
      </v-btn>
    </template>
    <assignment-form @create="dialog = false" />
  </v-dialog>
</template>

<script lang="ts">
import { mdiPlus } from '@mdi/js'
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const dialog = ref(false)

    return {
      dialog,
      mdiPlus,
    }
  },
})
</script>
