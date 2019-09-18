/**
 * 实现一个数组扁平化函数
 *
 * @param {*} array 需要处理的数组
 * @param {*} depth 扁平化的层数
 * @returns
 */
function flatten (array, depth) {
  return array.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      if (depth > 0) {
        prev.push(...flatten(curr, depth - 1))
      } else {
        prev.push(curr)
      }
    } else { prev.push(curr) }
    return prev
  }, [])
}

console.log('flatten([1, [1, [2]]], 1): ', flatten([1, [1, [2]]], 1))
console.log('flatten([1, [1, [2]]], 2): ', flatten([1, [1, [2]]], 2))
