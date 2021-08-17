<template>
  <v-form ref="form" v-model="valid" @submit.prevent="createAssignment">
    <v-card width="100%" elevation="3">
      <v-card-title>
        {{ $t('actions.create-assignment') }}
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="assignmentData.title"
          type="text"
          :counter="titleMaxLength"
          :rules="titleRules"
          :label="$t('assignments.create.title')"
          required
        />
        <v-text-field
          v-model="assignmentData.formula"
          type="text"
          :counter="formulaMaxLength"
          :rules="formulaRules"
          :label="$t('assignments.create.formula')"
          required
        />
        <v-text-field
          v-model="assignmentData.description"
          type="text"
          :counter="descriptionMaxLength"
          :rules="descriptionRules"
          :label="$t('assignments.create.description')"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="secondary" type="submit" :disabled="!valid">
          {{ $t('actions.create') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  useContext,
  useStore,
} from '@nuxtjs/composition-api'
import { maxLengthRule, textRules } from '~/model/rules'
import { Assignment } from '~/model/assignment'

export default defineComponent({
  setup(_, { emit }) {
    const assignmentData = reactive({
      title: '',
      formula: '',
      description: '',
    })

    const form = ref<HTMLFormElement | null>(null)

    const resetForm = function () {
      form.value?.reset()
      assignmentData.title = ''
      assignmentData.formula = ''
      assignmentData.description = ''
    }

    const { $axios, app } = useContext()
    const store = useStore()
    const createAssignment = async function () {
      try {
        const description = assignmentData.description.trim()
        const body: Record<string, string> = {
          title: assignmentData.title.trim(),
          formula: assignmentData.formula.trim(),
        }
        if (description.length >= 1) {
          body.description = description
        }
        const createdAssignment = (
          await $axios.post<Assignment>('/assignments', body)
        ).data
        store.commit('assignments/add', createdAssignment)
        resetForm()
        emit('create')
      } catch (error) {
        // TODO
        window.alert(error)
      }
    }

    const valid = ref(false)

    const titleMaxLength = 30
    const titleRules = textRules(app.i18n, titleMaxLength)

    const formulaMaxLength = 1000
    const formulaRules = textRules(app.i18n, formulaMaxLength)

    const descriptionMaxLength = 1000
    const descriptionRules = [maxLengthRule(app.i18n, descriptionMaxLength)]

    return {
      assignmentData,
      createAssignment,
      descriptionMaxLength,
      descriptionRules,
      form,
      formulaMaxLength,
      formulaRules,
      resetForm,
      titleMaxLength,
      titleRules,
      valid,
    }
  },
})
</script>
