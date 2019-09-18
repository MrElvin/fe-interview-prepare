/**
 * 实现一个 instanceof
 *
 * @param {*} obj
 * @param {*} constructor
 * @returns
 */
function myInstanceOf (obj, constructor) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new Error('[Error] Object required')
  }
  let left = Object.getPrototypeOf(obj)
  while (left) {
    if (left === constructor.prototype) {
      return true
    }
    left = Object.getPrototypeOf(left)
  }
  return false
}

const a = []
console.log(myInstanceOf(a, Array))
function P () {}
console.log(myInstanceOf(new P(), Object))
