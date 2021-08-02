<template>
  <div style="width: 100%">
    <client-only>
      <vue-masonry-wall :items="assignments" :ssr="{ columns: 1 }" :options="{ width: 400, padding: 6 }">
        <template #default="{ item }">
          <v-card v-if="item !== undefined" elevation="3">
            <v-card-title>
              <v-icon class="mr-2" color="primary" v-text="'mdi-text-box'" />
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.id }}
            </v-card-subtitle>
            <v-card-text v-show="item.description !== undefined">
              {{ item.description }}
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn icon color="primary" :aria-label="$t('actions.edit')" disabled>
                <v-icon v-text="'mdi-pencil'" />
              </v-btn>
              <v-btn icon color="error" :aria-label="$t('actions.delete')" @click="deleteAssignment(item)">
                <v-icon v-text="'mdi-delete'" />
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </vue-masonry-wall>
    </client-only>
    <create-assignment-fab />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, useContext, useStore } from '@nuxtjs/composition-api'
import { Assignment } from 'model/assignment'
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
      assignments.forEach((assignment: Assignment) => store.commit('assignments/add', assignment))
    })

    const assignments = computed<User[]>(() => store.getters['assignments/assignments'])

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
    }
  },
  head: {},
})
</script>
