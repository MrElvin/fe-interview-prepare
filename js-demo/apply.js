/* eslint-disable no-extend-native, no-eval */
/**
 * 实现原生的 apply 方法
 *
 * @param {*} context
 * @param {*} array
 */
Function.prototype.myApply = function (context, array) {
  context = context || window
  context.fn = this
  let result
  if (!array) {
    result = context.fn()
  } else {
    const str = array.join(',')
    result = eval('context.fn(' + str + ')')
  }
  delete context.fn
  return result
}
