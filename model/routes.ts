import { mdiAccountMultiple, mdiCog, mdiHome, mdiTextBoxMultiple } from '@mdi/js'

export interface Route {
  readonly title: string
  readonly navTitle?: string
  readonly to: string
  readonly icon?: string
}

export const routes = {
  dashboard: {
    title: 'dashboard.title',
    to: '/',
    icon: mdiHome,
  },
  assignments: {
    title: 'assignments.title',
    to: '/assignments',
    icon: mdiTextBoxMultiple,
  },
  users: {
    title: 'users.title',
    to: '/users',
    icon: mdiAccountMultiple,
  },
  settings: {
    title: 'settings.title',
    to: '/settings',
    icon: mdiCog,
  },
  login: {
    title: 'login.title',
    to: '/login',
  },
}
