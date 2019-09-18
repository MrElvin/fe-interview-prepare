/**
 * 实现一个自定义的 new 方法
 *
 * @param {*} constructor
 * @param {*} args
 */
const myNew = (constructor, ...args) => {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  const result = constructor.apply(obj, args)
  if (typeof result === 'object' || typeof result === 'function') {
    return result
  }
  return obj
}
function Man (name, age) {
  this.name = name
  this.age = age
}
const man = myNew(Man, 'Elvin', 24)
console.log(man)
console.log(Object.getPrototypeOf(man) === Man.prototype)
console.log(man.constructor === Man)
