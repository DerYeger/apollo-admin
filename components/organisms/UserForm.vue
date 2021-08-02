<template>
  <v-form ref="form" v-model="valid" @submit.prevent="createUser">
    <v-card width="100%" elevation="3">
      <v-card-title>
        {{ $t('actions.create-user') }}
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="userData.name"
          type="text"
          :counter="maxInputLength"
          :rules="rules"
          :label="$t('users.create.username')"
          required
        />
        <v-text-field
          v-model="userData.password"
          type="password"
          :counter="maxInputLength"
          :rules="rules"
          :label="$t('users.create.password')"
          required
        />
        <v-text-field
          v-model="userData.passwordRepeat"
          type="password"
          :counter="maxInputLength"
          :rules="repeatPasswordRules"
          :label="$t('users.create.password-repeat')"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="secondary" type="submit" :disabled="!valid">{{ $t('actions.create') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, useContext, useStore } from '@nuxtjs/composition-api'
import { Rule, textRules } from '~/model/rules'
import { User } from '~/model/user'

export default defineComponent({
  setup(_, { emit }) {
    const userData = reactive({
      name: '',
      password: '',
      passwordRepeat: '',
    })

    const form = ref<HTMLFormElement | null>(null)

    const resetForm = function () {
      form.value?.reset()
      userData.name = ''
      userData.password = ''
      userData.passwordRepeat = ''
    }

    const { $axios, app } = useContext()
    const store = useStore()
    const createUser = async function () {
      try {
        const body = {
          name: userData.name.trim(),
          password: userData.password.trim(),
        }
        const createdUser = (await $axios.post<User>('/users', body)).data
        store.commit('users/add', createdUser)
        resetForm()
        emit('create')
      } catch (error) {
        // TODO
        window.alert(error)
      }
    }

    const valid = ref(false)
    const maxInputLength = 30
    const rules = textRules(app.i18n, maxInputLength)
    const repeatPasswordRule: Rule = (v: string) => v === userData.password || (app.i18n.t('validations.must-match-password') as string)
    const repeatPasswordRules = [...rules, repeatPasswordRule]

    return {
      createUser,
      form,
      maxInputLength,
      repeatPasswordRules,
      resetForm,
      rules,
      userData,
      valid,
    }
  },
})
</script>
