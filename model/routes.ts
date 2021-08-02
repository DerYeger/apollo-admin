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
  login: {
    title: 'login.title',
    to: '/login',
  },
  settings: {
    title: 'settings.title',
    to: '/settings',
    icon: 'mdi-cog',
  },
}
