const Single = (function () {
  let instance = null
  return function (name) {
    if (!instance) instance = { name }
    return instance
  }
})()

const a = Single('zhang')
const b = Single('bo')
console.log(a, b)
