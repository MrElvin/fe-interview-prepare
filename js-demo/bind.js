/* eslint-disable no-extend-native */
/**
 * 实现原生的 bind 方法
 *
 * @param {*} context
 */
Function.prototype.myBind = function (context) {
  context = context || window
  const _args = Array.prototype.slice.call(arguments, 1)
  const _this = this
  const NOOP = function () {}
  const fn = function () {
    const _newArgs = Array.prototype.slice.call(arguments)
    const args = _args.concat(_newArgs)
    return _this.apply(this instanceof NOOP ? this : context, args)
  }
  NOOP.prototype = this.prototype
  fn.prototype = new NOOP()
  return fn
}
