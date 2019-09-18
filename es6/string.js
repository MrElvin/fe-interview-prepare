// fromCodePoint
String.fromCodePoint(0x20BB7)

// codePointAt
const s = '𠮷a'
for (const ch of s) {
  console.log(ch.codePointAt(0).toString(16))
}
function is32Bit (c) {
  return c.codePointAt(0) > 0xFFFF
}

// includes, startsWith, endsWith
const ss = 'Hello World!'
ss.startsWith('Hello') // true
ss.includes('o') // true
ss.endsWith('!') // true
ss.startsWith('world', 6) // true
ss.includes('e', 6) // false
ss.endsWith('Hello', 5) // true

// repeat
'x'.repeat(3) // 'xxx'
'na'.repeat(0) // ''
'na'.repeat(2.9) // 'nana'
'n'.repeat(-1) // Error
'n'.repeat(NaN) // ''

// padStart, padEnd
'x'.padStart(5, 'abab') // 'ababx'
'x'.padStart(3) // '  x'
'123'.padStart(6, '0') // '000123'
'09-12'.padStart(10, 'YYYY-MM-DD') // 'YYYY-09-12'

// trimStart, trimEnd
const str = '   abc   '
str.trimStart() // 'abc   '
str.trimEnd() // '   abc'
