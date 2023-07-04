/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV.match('GITHUB')
  ? '/TokyuLinesInfo/'
  : '/'
console.log({ routerBase, 'process.env.DEPLOY_ENV': process.env.DEPLOY_ENV })

export default {
  router: {
    base: routerBase, // your-repo-nameはGitHubリポジトリの名前に置き換えてください。
  },
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['@/assets/variables.scss'],
  },
  app: {
    base: routerBase,
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
