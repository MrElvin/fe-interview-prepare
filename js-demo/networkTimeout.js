/**
 * 模拟网络请求超时的情况
 *
 * @param {*} flag
 * @param {*} wait
 * @returns
 */
const timeout = function (flag, wait) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(flag)
    }, wait)
  })
}
Promise.race([timeout(true, 200), timeout(false, 500)]).then(flag => {
  console.log(flag ? '超时' : '正常处理')
})
