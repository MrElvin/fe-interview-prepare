/**
 * 去除数组中重复元素
 *
 * @param {*} array
 * @param {*} isSorted 数组已排序的时候可以优化速度
 * @param {*} preHandler 需要对数组中每项进行预处理的时候可以使用
 * @returns
 */
function unique (array, isSorted, preHandler) {
  const result = []
  let temp
  for (let i = 0; i < array.length; i++) {
    const item = preHandler ? preHandler(array[i]) : array[i]
    if (isSorted) {
      if (!i || item !== temp) {
        result.push(item)
      }
      temp = item
    } else {
      if (!result.includes(item)) {
        result.push(item)
      }
    }
  }
  return result
}
const array3 = [1, 'a', 1, 'a', 'A', 2, 2]
console.log(unique(array3))
console.log(unique(array3, false, (item) => typeof item === 'string' ? item.toLowerCase() : item))
