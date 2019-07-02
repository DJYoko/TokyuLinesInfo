/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/djyoko.github.io/TokyuLinesInfo/',
        },
      }
    : {}

export default {
  ...routerBase,
}
