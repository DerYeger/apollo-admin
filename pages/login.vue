<template>
  <v-form v-model="valid" style="width: 100%" class="d-flex justify-center flex-column" @submit.prevent="login">
    <v-banner v-if="isLogout" color="info" class="mb-3" dark rounded>
      {{ $t('login.logout-successful') }}
    </v-banner>
    <v-card width="100%" elevation="6">
      <v-card-title>
        {{ $t('login.title') }}
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="credentials.username" type="text" :rules="usernameRules" :label="$t('login.username')" required />
        <v-text-field v-model="credentials.password" type="password" :rules="passwordRules" :label="$t('login.password')" required />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="secondary" type="submit" :disabled="!valid">{{ $t('actions.login') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, useContext, useRoute, useRouter } from '@nuxtjs/composition-api'
import { Credentials } from '~/model/credentials'
import { useHead } from '~/compositions/head'
import { routes } from '~/model/routes'
import { textRules } from '~/model/rules'

export default defineComponent({
  layout: 'empty',
  setup() {
    const credentials = reactive<Credentials>({
      username: '',
      password: '',
    })

    const router = useRouter()
    const { $auth, app, localePath } = useContext()
    const login = async function () {
      try {
        await $auth.loginWith('local', { data: credentials })
        await router.push(localePath('/'))
      } catch (error) {
        // TODO
      }
    }
    const route = useRoute()
    const isLogout = computed(() => route.value.query.logout === 'true')

    useHead(routes.login)

    const valid = ref(false)

    return {
      credentials,
      login,
      isLogout,
      valid,
      usernameRules: textRules(app.i18n, 30),
      passwordRules: textRules(app.i18n, 30),
    }
  },
  head: {},
})
</script>
