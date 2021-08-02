import { Commit, Dispatch } from 'vuex'

export type Committer = { commit: Commit }

export type Dispatcher = { dispatch: Dispatch }

export const actions = {
  reset({ dispatch }: Dispatcher) {
    dispatch('assignments/reset')
    dispatch('settings/reset')
    dispatch('users/reset')
  },
}
