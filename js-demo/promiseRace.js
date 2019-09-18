/**
 * 实现一个 Promise.race
 *
 * @param {*} promises
 */
Promise.myRace = function (promises) {
  const length = promises.length
  if (!length) return
  return new Promise((resolve, reject) => {
    for (let i = 0; i < length; i++) {
      const promise = promises[i]
      promise.then(data => {
        return resolve(data)
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
console.time('promise-race')
Promise.myRace([timeout(1, 200), timeout(2, 500), timeout(3, 2000)]).then(data => {
  console.log(data)
  console.timeEnd('promise-race')
})
