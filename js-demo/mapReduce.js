/**
 * 利用 map 来实现 reduce
 *
 * 当 reduce 函数没有初始值的时候，默认初始值为 array[0]，然后从 index = 1 开始计算
 *
 * @param {*} array
 * @param {*} fn
 * @param {*} initial
 * @returns
 */
function myReduce (array, fn, initial) {
  let previous
  array.map((item, index, array) => {
    if (index === 0) {
      if (initial) {
        previous = initial
        previous = fn(previous, item, index, array)
      } else {
        previous = item
      }
    } else {
      previous = fn(previous, item, index, array)
    }
  })
  return previous
}
console.log(myReduce([1, 2, 3, 4, 5], (pre, cur) => pre + cur))
console.log(myReduce([1, 2, 3, 4, 5], (pre, cur) => pre + cur, 10))
