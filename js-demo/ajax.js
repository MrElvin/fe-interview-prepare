/* eslint-disable no-unused-vars */
/**
 * 封装原生 ajax 请求
 *
 * @param {*} method
 * @param {*} url
 * @param {*} [data=null]
 */
function ajax (method, url, data = null) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        // TODO WITH DATA
        console.log(xhr.responseText)
      } else {
        console.error('[error] ajax failed')
      }
    }
  }
  xhr.open(method, url, true)
  xhr.send(data)
}
