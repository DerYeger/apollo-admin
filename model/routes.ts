export interface Route {
  title: string
  navTitle?: string
  to: string
  icon?: string
}

export const routes = {
  dashboard: {
    title: 'dashboard.title',
    to: '/',
    icon: 'mdi-home',
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
