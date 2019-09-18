const array = [8, 3, 12, 1, 51, 19, 32, 3, 3, 43]

/**
 * 实现一个堆排序
 *
 * @param {*} array
 * @returns
 */
function heapSort (array) {
  const sortedArray = array.slice()
  let heapSize = sortedArray.length
  buildHeap(sortedArray)
  while (heapSize) {
    heapSize--
    const temp = sortedArray[0]
    sortedArray[0] = sortedArray[heapSize]
    sortedArray[heapSize] = temp
    heap(sortedArray, heapSize, 0)
  }
  return sortedArray
}

/**
 * 将数组堆化
 *
 * @param {*} array
 * @returns
 */
function buildHeap (array) {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heap(array, array.length, i)
  }
  return array
}

/**
 * 构造堆的时候使用的辅助函数
 *
 * @param {*} array
 * @param {*} heapSize
 * @param {*} i
 */
function heap (array, heapSize, i) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let large = i
  if (left < heapSize && array[left] > array[large]) {
    large = left
  }
  if (right < heapSize && array[right] > array[large]) {
    large = right
  }
  if (large !== i) {
    const temp = array[large]
    array[large] = array[i]
    array[i] = temp
    heap(array, heapSize, large)
  }
}

console.log(heapSort(array))
