const array = [8, 3, 12, 1, 51, 19, 32, 3, 3, 43]

function merge (array) {
  if (!array || !array.length) return []
  if (array.length === 1) return array
  const left = 0
  const right = array.length
  const mid = Math.floor((left + right) / 2)
  const leftArray = array.slice(0, mid)
  const rightArray = array.slice(mid, right)
  return mergeSort(merge(leftArray), merge(rightArray))
}

function mergeSort (leftArray, rightArray) {
  let leftIndex = 0
  let rightIndex = 0
  const result = []
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      result.push(leftArray[leftIndex++])
    } else {
      result.push(rightArray[rightIndex++])
    }
  }
  while (leftIndex < leftArray.length) {
    result.push(leftArray[leftIndex++])
  }
  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex++])
  }
  return result
}

console.log(merge(array))
