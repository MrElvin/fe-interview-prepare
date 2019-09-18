/**
 * 实现一个简单的工厂函数
 *
 * @param {*} name
 * @returns
 */
function factoryCreate (name) {
  const o = {}
  o.name = name
  return o
}

const a = factoryCreate('zhang')
console.log('a: ', a)
