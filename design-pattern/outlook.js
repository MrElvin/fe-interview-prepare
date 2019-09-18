/**
 * 封装一个对外暴露的为 DOM 元素添加事件的接口
 * 处理兼容性问题
 *
 * @param {*} dom
 * @param {*} type
 * @param {*} fn
 */
function addEvent (dom, type, fn) {
  if (document.addEventListener) {
    dom.addEventListener(type, fn, false)
  } else if (document.attachEvent) {
    dom.attachEvent('on' + type, fn)
  } else {
    dom['on' + type] = fn
  }
}
