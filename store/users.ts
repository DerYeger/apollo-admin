import Vue from 'vue'
import { EntityRecord } from '~/model/entity'
import { toArray } from '~/model'
import { Committer } from '~/store/index'
import { User } from '~/model/user'

export type UsersState = EntityRecord<User>

export const state: () => UsersState = () => ({} as UsersState)

export const actions = {
  reset({ commit }: Committer) {
    commit('removeAll')
    commit('set', {})
  },
}

export const getters = {
  byId:
    (state: UsersState) =>
    (id: string): User | undefined =>
      state[id],
  users: (state: UsersState): User[] => toArray(state),
}

export const mutations = {
  add(state: UsersState, user: User) {
    Vue.set(state, user.id, user)
  },
  remove(state: UsersState, user: User) {
    Vue.delete(state, user.id)
  },
  removeAll(state: UsersState) {
    toArray(state).forEach((user) => Vue.delete(state, user.id))
  },
  set(state: UsersState, users: UsersState) {
    Object.assign(state, users)
  },
}
