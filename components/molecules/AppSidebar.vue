<template>
  <v-list dense nav>
    <app-navigation />
    <resources />
    <v-btn color="secondary" @click="logout()">
      {{ $t('actions.logout') }}
    </v-btn>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, useContext, useRouter } from '@nuxtjs/composition-api'

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
    }
  },
})
</script>
