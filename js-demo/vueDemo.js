/* eslint-disable no-new */
function defineReactive (obj, key, value) {
  observe(obj[key])
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get () {
      console.log(`[get] ${key}`)
      Dep.target && dep.add(Dep.target)
      return value
    },
    set (newValue) {
      console.log(`[set] ${key}`)
      dep.notify()
      value = newValue
    }
  })
}

function observe (obj) {
  if (!obj || typeof obj !== 'object') return
  Object.keys(obj).forEach(v => {
    defineReactive(obj, v, obj[v])
  })
}

class Dep {
  constructor () {
    this.subs = []
  }

  add (watcher) {
    this.subs.push(watcher)
  }

  notify () {
    this.subs.forEach(watcher => typeof watcher === 'function' && watcher.update())
  }
}
Dep.target = null

class Watcher {
  constructor (obj, key, cb) {
    Dep.target = this
    this.obj = obj
    this.cb = cb
    this.key = key
    this.value = obj[key]
    Dep.target = null
  }

  update () {
    this.cb && this.cb(this.obj, this.key)
  }
}

class Vue {
  constructor (options) {
    const { data } = options
    observe(data)
    new Watcher(data, 'text', handler)
    // TODO ADD DOM EVENT TO UPDATE DATA
  }
}

function handler () {
  // TODO UPDATE DOM
}

new Vue({
  data: {
    text: 'hello'
  }
})
