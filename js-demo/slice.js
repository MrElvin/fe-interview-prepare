/**
 * 实现可以采用以下方式调用的 slice 函数
 * slice(arr, 0, 2)
 */
const slice = Function.prototype.call.bind(Array.prototype.slice)
console.log(slice([1, 2, 3, 4], 0, 2))
