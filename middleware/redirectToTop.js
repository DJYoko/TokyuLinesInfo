export default function ({ redirect }) {
  const routerBase = process.env.DEPLOY_ENV.match('GITHUB')
    ? '/TokyuLinesInfo/'
    : '/'
  return redirect(routerBase)
}
