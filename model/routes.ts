export interface Route {
  title: string
  navTitle?: string
  to: string
  icon?: string
}

export const routes: Record<string, Route> = {
  dashboard: {
    title: 'dashboard.title',
    to: '/',
    icon: 'mdi-home',
  },
  settings: {
    title: 'settings.title',
    to: '/settings',
    icon: 'mdi-cog',
  },
}
