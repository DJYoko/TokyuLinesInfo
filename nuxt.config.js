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
  },
}
