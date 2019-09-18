/**
 * 使用 reduce 实现 map
 * 注意 map 的第二个参数，指定 context
 *
 * @param {*} fn
 * @param {*} context
 * @returns
 */
const reduceMap = (fn, context) => {
  return list => {
    if (!list.length) return []
    return list.reduce((mappedArray, item, index, list) => {
      const value = fn.call(context, item, index, list)
      return mappedArray.concat([value])
    }, [])
  }
}

reduceMap(function (item) {
  console.log(this)
  return item + 1
})([1, 2, 3])

reduceMap(function (item) {
  console.log(this)
  return item + this.message
}, { message: 'hi' })([1, 2, 3])
