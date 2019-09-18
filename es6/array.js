/** Array.from */
const arrayLike = {
  0: 'a',
  1: 'b',
  length: 2
}
Array.from(arrayLike) // ['a', 'b']
Array.from([1, 2, 3], x => x * x) // [1, 4, 9]

/** Array.of */
Array.of(3, 11, 8) // [3, 11, 8]
Array.of() // []

/** find, findIndex */
const array = [1, 4, 5, 10]
array.find(function (value, index, arr) {
  return value > 4
}) // 5
array.findIndex(value => value > 4) // 1

/** fill */
const a = new Array(3)
a.fill(5) // a: [5, 5, 5]

const b = ['a', 'b', 'c', 'd']
b.fill(5, 1, 3) // b: ['a', 5, 5, 'd']

const c = new Array(3).fill({ name: 'Mike' })
c[0].name = 'Ben'
// c: [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

/** includes */
const d = [1, 2, 3]
const e = [1, 2, NaN]
d.includes(1) // true
d.includes(3, 3) // false
e.includes(NaN) // true

/** flat */
const f = [1, [2, [3]]]
f.flat(Infinity) // [1, 2, 3]
