/**
 * 实现一个洗牌算法，打乱数组
 *
 * @param {*} array
 * @returns
 */
function shuffle (array) {
  const messedArray = array.slice()
  for (let i = messedArray.length - 1; i >= 0; i--) {
    const index = Math.floor(Math.random() * (i + 1))
    const temp = messedArray[i]
    messedArray[i] = messedArray[index]
    messedArray[index] = temp
  }
  return messedArray
}
const array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(shuffle(array))
