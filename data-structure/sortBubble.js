const array = [3, 9, 5, 4, 10]

/**
 * 实现一个冒泡排序
 *
 * @param {*} array
 * @returns
 */
function bubble (array) {
  const sortedArray = array.slice()
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j]
        sortedArray[j] = sortedArray[j + 1]
        sortedArray[j + 1] = temp
      }
    }
  }
  return sortedArray
}
console.log(bubble(array))
