const fs = require('fs')
/**
 * 实现一个 promisify，用于将 callback 形式函数 promise 化
 *
 * @param {*} fn
 * @returns
 */
function promisify (fn) {
  return function () {
    const args = Array.prototype.slice.call(arguments)
    const context = this
    return new Promise((resolve, reject) => {
      const cb = function (err, ...data) {
        if (err) {
          return reject(err)
        }
        return resolve(...data)
      }
      fn.apply(context, args.concat(cb))
    })
  }
}
const readDir = promisify(fs.readdir)
readDir('./').then(data => console.log(data))
