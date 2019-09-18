/**
 * 实现一个 debounce 函数
 * 默认后置触发，immediate 设为 true 更改为前置触发
 *
 * @param {*} fn
 * @param {*} wait
 * @param {boolean} [immediate=false]
 * @returns
 */
function debounce (fn, wait, immediate = false) {
  let timer = null
  let isFirst
  const context = this
  return function () {
    const args = Array.from(arguments)
    clearTimeout(timer)
    if (immediate) {
      isFirst = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (isFirst) {
        return fn.apply(context, args)
      }
    } else {
      timer = setTimeout(() => {
        return fn.apply(context, args)
      }, wait)
    }
  }
}
const fn = debounce(name => console.log(name), 500, true)
for (let i = 0; i < 100000; i++) {
  fn('debounce')
}
setTimeout(() => {
  for (let i = 0; i < 100000; i++) {
    fn('DEBOUNCE')
  }
}, 3000)
