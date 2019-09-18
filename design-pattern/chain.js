const myMath = (function () {
  let result = 0
  return {
    equal () {
      const temp = result
      result = 0
      return temp
    },
    add (x, y) {
      if (arguments.length === 1) {
        result += arguments[0]
      } else {
        result = arguments[0] + arguments[1]
      }
      return this
    }
  }
})()

console.log(myMath.add(2, 3).add(3).equal())
