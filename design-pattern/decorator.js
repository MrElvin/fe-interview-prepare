function decorator (dom, fn) {
  if (typeof dom.onclick === 'function') {
    const oldFn = dom.onclick
    dom.onclick = function () {
      oldFn.apply(this, arguments)
      fn.apply(this, arguments)
    }
  } else {
    dom.onclick = fn
  }
}

const btn = document.getElementById('btn')
btn.onclick = function () { console.log('old', this) }
decorator(btn, function () { console.log('new', this) })
