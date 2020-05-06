/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/TokyuLinesInfo/',
        },
        generate: {
          dir: 'docs'
        },
      }
    : {}

export default {
  loading: false,
  render: {
    resourceHints: false
  },
  modules: [
    // With options
    ['@nuxtjs/amp']
  ],
  amp: {
    // Options
    origin: 'http://localhost:3000'
  },
  ...routerBase,
}
