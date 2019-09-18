/** set */
const set = new Set()
const a = NaN
const b = NaN
set.add(a)
set.add(b) // Set {NaN}

/** 数组去重和字符串去重 */
const arr = [...new Set([1, 1, 3, 3, 4])]
const str = [...new Set('aabbc')].join('')

/** add, size, has, delete */
set.add(1).add(2).add(2)
console.log('set.size: ', set.size) // 2

set.has(1) // true
set.has(2) // true
set.has(3) // false
set.delete(2)
set.has(2) // false
set.clear() // Set {}

/** keys()，values()，entries() */
const set2 = new Set(['red', 'green', 'blue'])
for (const item of set2.keys()) { // red green blue
  console.log(item)
}
for (const item of set2.values()) { // red green blue
  console.log(item)
}
for (const item of set.entries()) { // ["red", "red"] ["green", "green"] ["blue", "blue"]
  console.log(item)
}

/** map */
const m = new Map()
const o = { p: 'Hello World' }
m.set(o, 'content')
m.get(o) // "content"
m.has(o) // true
m.delete(o) // true
m.has(o) // false

/** keys()，values()，entries() */
const map = new Map([
  ['F', 'no'],
  ['T', 'yes']
])

for (const key of map.keys()) { // "F" "T"
  console.log(key)
}
for (const value of map.values()) { // "no" "yes"
  console.log(value)
}
for (const [key, value] of map.entries()) { // "F" "no" "T" "yes"
  console.log(key, value)
}
for (const [key, value] of map) { // "F" "no" "T" "yes"
  console.log(key, value)
}

/** weekmap 使用场景 */
const _wm = new WeakMap()
class Item {
  constructor (counter) {
    _wm.set(this, counter)
  }

  desc () {
    let counter = _wm.get(this)
    counter--
    _wm.set(this, counter)
  }
}
