/** 实现一个 EventBus，用于注册、执行、取消事件 */
const EventBus = (function () {
  const STORE = new Map()
  return {
    on (type, fn) {
      if (STORE.has(type)) {
        STORE.get(type).push(fn)
      } else {
        STORE.set(type, [fn])
      }
      return this
    },
    emit (type, args) {
      if (STORE.has(type)) {
        const event = { type, data: args || null }
        for (const fn of STORE.get(type)) {
          fn && fn.call(this, event)
        }
      }
      return this
    },
    remove (type, fn) {
      if (fn) {
        if (STORE.has(type) && STORE.get(type).length) {
          STORE.set(type, STORE.get(type).filter(item => item !== fn))
        }
      } else {
        STORE.delete(type)
      }
      return this
    }
  }
})()
const test = event => console.log(event)
EventBus.on('test', test).emit('test', { name: 'Elvin' }).remove('test')
