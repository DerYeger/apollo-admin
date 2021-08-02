<template>
  <v-list-item-group color="info">
    <v-subheader>{{ $t('misc.navigation') }}</v-subheader>
    <route-list-item v-for="(route, i) in routes" :key="i" :route="route" />
    <v-list-item @click="logout()">
      <v-list-item-icon>
        <v-icon v-text="'mdi-logout'" />
      </v-list-item-icon>
      <v-list-item-title>
        {{ $t('actions.logout') }}
      </v-list-item-title>
    </v-list-item>
  </v-list-item-group>
</template>

<script lang="ts">
import { defineComponent, useContext, useRouter } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  setup() {
    const router = useRouter()
    const { $auth, localePath } = useContext()
    const logout = async function () {
      await $auth.logout()
      router.push(localePath('/login?logout=true'))
    }

    return {
      logout,
      routes: [routes.dashboard, routes.users, routes.settings],
    }
  },
})
</script>
