/**
 * 实现一个 二分查找
 *
 * @param {*} arr
 * @param {*} value
 */
function binarySearch (arr, value) {
  const array = arr.slice().sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (array[mid] > value) {
      right = mid - 1
    } else if (array[mid] < value) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
const array = [23, 12, 43, 53, 22, 5, 9, 2]
console.log(binarySearch(array, 12))
console.log(binarySearch(array, 21))
