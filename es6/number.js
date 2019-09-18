/** Number.isFinite, Number.isNaN */
isFinite(25) // true
isFinite('25') // true
Number.isFinite(25) // true
Number.isFinite('25') // false

isNaN(NaN) // true
isNaN('NaN') // true
Number.isNaN(NaN) // true
Number.isNaN('NaN') // false

/** Math.trunc */
Math.trunc(5.1) // 5
Math.trunc(-5.5) // -5
Math.trunc('5.5') // 5

/** Math.sign */
Math.sign(-5) // -1
Math.sign(5) // 1
Math.sign(0) // 0
Math.sign(-0) // -0
Math.sign(NaN) // NaN

/** Math.hypot */
Math.hypot(3, 4) // 5
Math.hypot('3', 4) // 5
