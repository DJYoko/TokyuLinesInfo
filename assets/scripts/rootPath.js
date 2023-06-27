// rootPath
export default (url) => {
  const isLocal = url.match(/localhost/g)
  return isLocal ? '/' : '/TokyuLinesInfo/'
}
