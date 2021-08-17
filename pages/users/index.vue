<template>
  <div style="width: 100%">
    <client-only>
      <masonry-wall :items="users" :ssr-columns="1" :column-width="400" :padding="12">
        <template #default="{ item }">
          <v-card v-if="item !== undefined" elevation="3">
            <v-card-title>
              <v-icon class="mr-2" color="primary" v-text="'mdi-account'" />
              {{ item.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.id }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer />
              <v-btn icon color="primary" :aria-label="$t('actions.edit')" disabled>
                <v-icon v-text="'mdi-pencil'" />
              </v-btn>
              <v-btn :disabled="item.id === currentUser.id" icon color="error" :aria-label="$t('actions.delete')" @click="deleteUser(item)">
                <v-icon v-text="'mdi-delete'" />
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </masonry-wall>
    </client-only>
    <create-user-fab />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, useContext, useStore } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'
import { useHead } from '~/compositions/head'
import { User } from '~/model/user'

export default defineComponent({
  setup() {
    useHead(routes.users)

    const { $axios, $auth } = useContext()

    const store = useStore()
    onMounted(async () => {
      const users = (await $axios.get<User[]>('/users')).data
      users.forEach((user: User) => store.commit('users/add', user))
    })

    const users = computed<User[]>(() => store.getters['users/users'])

    const deleteUser = async function (user: User) {
      try {
        await $axios.$delete(`/users/${user.id}`)
        store.commit('users/remove', user)
      } catch (error) {
        // TODO
        window.alert(error)
      }
    }

    return {
      currentUser: $auth.user,
      deleteUser,
      users,
    }
  },
  head: {},
})
</script>
