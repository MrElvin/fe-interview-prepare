module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    // $: false
    // _: false
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
}
