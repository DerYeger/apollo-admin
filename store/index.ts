import { Commit, Dispatch } from 'vuex'

export type Committer = { commit: Commit }

export type Dispatcher = { dispatch: Dispatch }

export const actions = {
  reset({ dispatch }: Dispatcher) {
    dispatch('settings/reset')
  },
}
