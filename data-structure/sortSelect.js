const array = [8, 3, 12, 1, 51, 19, 32, 3, 3, 43]
/**
 * 实现一个选择排序
 *
 * @param {*} array
 * @returns
 */
function select (array) {
  const sortedArray = array.slice()
  for (let i = 0; i < sortedArray.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[minIndex]) {
        minIndex = j
      }
    }
    const temp = sortedArray[minIndex]
    sortedArray[minIndex] = sortedArray[i]
    sortedArray[i] = temp
  }
  return sortedArray
}

console.log(select(array))
