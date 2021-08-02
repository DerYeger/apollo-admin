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
    icon: 'mdi-home',
  },
  assignments: {
    title: 'assignments.title',
    to: '/assignments',
    icon: 'mdi-text-box-multiple',
  },
  users: {
    title: 'users.title',
    to: '/users',
    icon: 'mdi-account-multiple',
  },
  settings: {
    title: 'settings.title',
    to: '/settings',
    icon: 'mdi-cog',
  },
  login: {
    title: 'login.title',
    to: '/login',
  },
}
