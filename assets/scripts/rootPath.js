// rootPath
export default () => {
  return location.href.match('TokyuLinesInfo') ? '/TokyuLinesInfo/' : '/'
}
