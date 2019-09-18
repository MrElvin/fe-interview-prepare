/**
 * 实现一个 Node 的模块对象
 * 在 Node 中，每个文件模块都是一个对象
 *           —— 《深入浅出 Node.js》
 *
 * @param {*} id
 * @param {*} parent
 */
function Module (id, parent) {
  this.id = id
  this.exports = {}
  this.parent = parent
  if (parent && parent.children) {
    parent.children.push(this)
  }
  this.children = []
  this.loaded = false
  this.filename = null
}
