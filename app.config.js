import colors from 'vuetify/es5/util/colors'

const primaryColor = colors.blueGrey.base

export default {
  name: 'Apollo Admin',
  host: 'https://apollo-admin.yeger.eu',
  theme: {
    primary: primaryColor,
    light: {
      primary: primaryColor,
      secondary: colors.pink.base,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3,
    },
    dark: {
      primary: primaryColor,
      secondary: colors.pink.base,
      info: colors.teal.lighten3,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3,
    },
  },
}
