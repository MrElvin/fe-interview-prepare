/**
 * 实现一个 curry 函数
 *
 */
function curry (fn) {
  const length = fn.length
  const _args = Array.prototype.slice.call(arguments, 1)
  return function () {
    const newArgs = Array.prototype.slice.call(arguments)
    const args = [..._args, ...newArgs]
    if (args.length >= length) {
      return fn.apply(this, args)
    } else {
      return curry.apply(this, [fn, ...args])
    }
  }
}
var fn = curry(function (a, b, c) {
  console.log([a, b, c])
})
fn('a', 'b', 'c')
fn('a', 'b')('c')
fn('a')('b')('c')
fn('a')('b', 'c')
