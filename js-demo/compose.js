/**
 * 实现一个 compose 函数
 *
 */
function compose () {
  const fnArray = Array.from(arguments)
  if (!fnArray.length) return
  let index = fnArray.length - 1
  return function () {
    let result = fnArray[index].apply(this, arguments)
    while (index--) {
      result = fnArray[index].call(this, result)
    }
    return result
  }
}
const hello = str => 'HELLO ' + str
const toUpperCase = str => str.toUpperCase()
var greet = compose(
  console.log,
  hello,
  toUpperCase
)
greet('kevin')
