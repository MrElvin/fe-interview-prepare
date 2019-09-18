/**
 * 模拟实现一个 Promise.all
 *
 * @param {*} promises
 * @returns
 */
Promise.myAll = function (promises) {
  const length = promises.length
  if (!length) return
  const result = new Array(length)
  let count = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < length; i++) {
      const promise = promises[i]
      promise.then(data => {
        result[i] = data
        count++
        if (count === length) {
          resolve(result)
        }
      }, err => reject(err))
    }
  })
}
const timeout = function (flag, wait) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(flag)
    }, wait)
  })
}
console.time('promise-all')
Promise.myAll([timeout(1, 200), timeout(2, 500), timeout(3, 2000)]).then(data => {
  console.log(data)
  console.timeEnd('promise-all')
})
