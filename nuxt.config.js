const pkg = require('./package')
const siteTitle = '神々のクイズ'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/kamigami-quiz/'
  }
} : {}

module.exports = {
  mode: 'spa',
  head: {
    title: siteTitle,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: siteTitle
      },
      {
        property: 'og:site_name',
        content: siteTitle
      },
      {
        property: 'og:description',
        content: pkg.description
      },
      {
        property: 'og:url',
        content: 'https://kimulaco.github.io/kamigami-quiz/'
      },
      {
        property: 'og:image',
        content: '/kamigami-quiz/ogp.png'
      }
    ],
    script: [
      {
        src: 'https://d.line-scdn.net/liff/1.0/sdk.js'
      }
    ]
  },
  loading: {
    color: '#fff'
  },
  css: ['normalize.css', '@/assets/sass/_elements.scss'],
  plugins: [],
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    sass: ['@/assets/sass/_variable.scss', '@/assets/sass/_mixin.scss']
  },
  ...routerBase,
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
