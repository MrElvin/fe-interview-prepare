/**
 *
 * 实现一个蹦床函数
 * 该函数用来将原来的递归调用方式更改为循环调用的方式
 * 使得函数执行更加安全，不会有调用栈溢出的情况出现
 * https://stackoverflow.com/questions/25228871/how-to-understand-trampoline-in-javascript
 *
 */
function repeat (operation, num) {
  return function () {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
}

function trampoline (fn) {
  while (fn && typeof fn === 'function') {
    fn = fn()
  }
}

module.exports = function (operation, num) {
  trampoline(function () {
    return repeat(operation, num)
  })
}
