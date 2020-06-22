module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
/*  devServer: {
    disableHostCheck: true
  },*/

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
