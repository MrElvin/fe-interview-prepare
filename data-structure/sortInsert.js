const array = [3, 38, 2, 5, 47, 26]

/**
 * 实现一个插入排序
 *
 * @param {*} array
 * @returns
 */
function insert (array) {
  const sortedArray = array.slice()
  for (let i = 1; i < sortedArray.length; i++) {
    for (let j = i; j > 0; j--) {
      if (sortedArray[j] < sortedArray[j - 1]) {
        const temp = sortedArray[j]
        sortedArray[j] = sortedArray[j - 1]
        sortedArray[j - 1] = temp
      }
    }
  }
  return sortedArray
}

console.log(insert(array))
