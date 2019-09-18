/** 实现一个判断对象类型的函数 */
const getType = (function () {
  const TYPE_MAP = Object.create(null)
  'Boolean Number String Object Null Undefined Symbol Array Function Date RegExp Error'.split(' ').map(type => {
    TYPE_MAP[`[object ${type}]`] = type.toLowerCase()
  })
  return function (param) {
    if (typeof param === 'object' || typeof param === 'function') {
      return TYPE_MAP[Object.prototype.toString.call(param)] || 'object'
    }
    return typeof param
  }
})()
console.log(getType(new Array(2)))
console.log(getType(new Date()))
console.log(getType(Symbol('Elvin')))
console.log(getType(2))
