<template>
  <v-select
    v-model="layout"
    :items="layoutOptions"
    :label="$t('layout.title')"
    dense
    :append-icon="mdiMenuDown"
  >
    <template #selection="{ item }">
      {{ $t(`layout.${item}`) }}
    </template>
    <template #item="{ item, attrs, on }">
      <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-content>
          <v-list-item-title>
            {{ $t(`layout.${item}`) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-select>
</template>

<script lang="ts">
import { mdiMenuDown } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import { Layout, layouts } from '~/model/layout'

export default defineComponent({
  data() {
    return {
      layoutOptions: layouts,
      mdiMenuDown,
    }
  },
  computed: {
    layout: {
      get(): Layout {
        return this.$store.state.settings.layout
      },
      set(value: string) {
        this.$store.commit('settings/setLayout', value)
      },
    },
  },
})
</script>
