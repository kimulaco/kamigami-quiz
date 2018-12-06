const pkg = require('./package')

module.exports = {
  mode: 'spa',
  head: {
    title: '神々のクイズ',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'robots',
        content: 'noindex,nofollow'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    bodyAttrs: {
      lang: 'ja',
      class: 'app'
    }
  },
  loading: {
    color: '#fff'
  },
  css: ['normalize.css', '@/assets/sass/_elements.scss'],
  plugins: [],
  modules: [
    [
      'nuxt-sass-resources-loader',
      ['@/assets/sass/_variable.scss', '@/assets/sass/_mixin.scss']
    ]
  ],
  generate: {
    dir: 'docs'
  },
  build: {
    vendor: ['vuex'],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
