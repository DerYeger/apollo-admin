<template>
  <div style="width: 100%">
    <client-only>
      <masonry-wall
        :items="assignments"
        :ssr-columns="1"
        :column-width="400"
        :gap="12"
      >
        <template #default="{ item }">
          <v-card v-if="item !== undefined" elevation="3">
            <v-card-title>
              <v-icon class="mr-2" color="primary">{{ mdiTextBox }}</v-icon>
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle class="pb-2">
              {{ item.id }}
            </v-card-subtitle>
            <v-card-title class="pt-0">
              {{ item.formula }}
            </v-card-title>
            <v-card-subtitle v-show="item.description !== undefined">
              {{ item.description }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer />
              <v-btn
                icon
                color="primary"
                :aria-label="$t('actions.edit')"
                disabled
              >
                <v-icon>{{ mdiPencil }}</v-icon>
              </v-btn>
              <v-btn
                icon
                color="error"
                :aria-label="$t('actions.delete')"
                @click="deleteAssignment(item)"
              >
                <v-icon>{{ mdiDelete }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </masonry-wall>
    </client-only>
    <create-assignment-fab />
  </div>
</template>

<script lang="ts">
import { mdiDelete, mdiPencil, mdiTextBox } from '@mdi/js'
import {
  computed,
  defineComponent,
  onMounted,
  useContext,
  useStore,
} from '@nuxtjs/composition-api'
import { Assignment } from '~/model/assignment'
import { routes } from '~/model/routes'
import { useHead } from '~/compositions/head'
import { User } from '~/model/user'

export default defineComponent({
  setup() {
    useHead(routes.assignments)

    const { $axios } = useContext()

    const store = useStore()
    onMounted(async () => {
      const assignments = (await $axios.get<Assignment[]>('/assignments')).data
      assignments.forEach((assignment: Assignment) =>
        store.commit('assignments/add', assignment)
      )
    })

    const assignments = computed<User[]>(
      () => store.getters['assignments/assignments']
    )

    const deleteAssignment = async function (assignment: Assignment) {
      try {
        await $axios.$delete(`/assignments/${assignment.id}`)
        store.commit('assignments/remove', assignment)
      } catch (error) {
        // TODO
        window.alert(error)
      }
    }

    return {
      assignments,
      deleteAssignment,
      mdiDelete,
      mdiPencil,
      mdiTextBox,
    }
  },
  head: {},
})
</script>
