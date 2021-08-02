import Vue from 'vue'
import { EntityRecord } from '~/model/entity'
import { toArray } from '~/model'
import { Committer } from '~/store/index'
import { Assignment } from '~/model/assignment'

export type AssignmentsState = EntityRecord<Assignment>

export const state: () => AssignmentsState = () => ({} as AssignmentsState)

export const actions = {
  reset({ commit }: Committer) {
    commit('removeAll')
    commit('set', {})
  },
}

export const getters = {
  byId:
    (state: AssignmentsState) =>
    (id: string): Assignment | undefined =>
      state[id],
  assignments: (state: AssignmentsState): Assignment[] => toArray(state),
}

export const mutations = {
  add(state: AssignmentsState, assignment: Assignment) {
    Vue.set(state, assignment.id, assignment)
  },
  remove(state: AssignmentsState, assignment: Assignment) {
    Vue.delete(state, assignment.id)
  },
  removeAll(state: AssignmentsState) {
    toArray(state).forEach((assignment) => Vue.delete(state, assignment.id))
  },
  set(state: AssignmentsState, assignments: AssignmentsState) {
    Object.assign(state, assignments)
  },
}
