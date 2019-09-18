/* eslint-disable no-unused-vars */
/**
 * 实现一个 throttle 函数
 *
 * @param {*} fn
 * @param {*} wait
 */
function throttle (fn, wait) {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, wait)
    }
  }
}
