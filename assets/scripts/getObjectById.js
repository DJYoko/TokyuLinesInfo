// getObjectById

export default (ary, id) => {
  if (typeof ary !== 'object') return null
  if (typeof id !== 'string' && typeof id !== 'number') return null

  let returnObject = null
  ary.forEach((item) => {
    if (item.id === id) {
      returnObject = item
    }
  })
  return returnObject
}
