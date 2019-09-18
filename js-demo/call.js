/* eslint-disable no-extend-native, no-eval */
/**
 * 原生实现 call 函数
 *
 * @param {*} context
 */
Function.prototype.myCall = function (context) {
  context = context || window
  context.fn = this
  const args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  const result = eval('context.fn(' + args.join(',') + ')')
  delete context.fn
  return result
}
