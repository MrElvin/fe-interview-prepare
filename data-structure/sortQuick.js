// const array = [8, 3, 12, 1, 51, 19, 32, 3, 3, 43]
const array = [3, 8, 2, 19, 12]

/**
 * 实现一个快速排序
 *
 * @param {*} array
 * @param {*} start
 * @param {*} end
 */
function quick (array, start, end) {
  if (!array || !array.length) return
  const index = split(array, start, end)
  if (start < index - 1) quick(array, start, index - 1)
  if (end > index) quick(array, index, end)
}

/**
 * 快速排序辅助函数，用于找到分割点
 *
 * @param {*} array
 * @param {*} start
 * @param {*} end
 * @returns
 */
function split (array, start, end) {
  const keyValue = array[Math.floor((start + end) / 2)]
  while (start <= end) {
    while (array[start] < keyValue) {
      start++
    }
    while (array[end] > keyValue) {
      end--
    }
    if (start <= end) {
      const temp = array[start]
      array[start] = array[end]
      array[end] = temp
      start++
      end--
    }
  }
  return start
}

quick(array, 0, array.length - 1)
console.log(array)
