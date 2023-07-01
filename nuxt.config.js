/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/TokyuLinesInfo/',
        },
        generate: {
          dir: 'docs',
        },
      }
    : {}

export default {
  ...routerBase,
  target: 'static',
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['@/assets/variables.scss'],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
          integrity:
            'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',

          href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        },
      ],
    },
  },
}
