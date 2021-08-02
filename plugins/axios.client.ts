import { Context } from '@nuxt/types'

export default function ({ $axios, $auth, app, localePath }: Context) {
  $axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      const code = parseInt(error.response && error.response.status)

      if ([401, 403].includes(code)) {
        $auth.logout().then(() => app.router?.push(localePath('/login')))
      }

      return Promise.reject(error)
    }
  )
}
