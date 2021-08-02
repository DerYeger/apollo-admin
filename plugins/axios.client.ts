import { Context } from '@nuxt/types'

export default function ({ $axios, app, localePath }: Context) {
  $axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      const code = parseInt(error.response && error.response.status)

      if ([401, 403].includes(code)) {
        app.$auth.logout().then(() => app.router?.push(localePath('/login')))
      }

      return Promise.reject(error)
    }
  )
}
