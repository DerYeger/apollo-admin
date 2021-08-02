import { useContext, useMeta } from '@nuxtjs/composition-api'
import { Route } from '~/model/routes'

export function useHead(route: Route) {
  const { app } = useContext()
  const title = app.i18n.t(route.title) as string
  useMeta({
    title,
  })
}
