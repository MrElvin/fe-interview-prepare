/**
 *              container
 *               /      \
 *         sidebar      main
 *          /           /  \
 *      menu        post    copyright
 */
const data = {
  value: 'container',
  children: [
    {
      value: 'sidebar',
      children: [
        {
          value: 'menu',
          children: null
        }
      ]
    },
    {
      value: 'main',
      children: [
        {
          value: 'post',
          children: null
        },
        {
          value: 'copyright',
          children: null
        }
      ]
    }
  ]
}

/**
 * 实现一个 dfs 函数，对每个节点执行 callback
 *
 * @param {*} root
 * @param {*} cb
 */
function dfs (root, cb) {
  function dfsTraverse (root, cb, depth) {
    if (!root) return
    cb(root.value, depth)
    if (root.children) {
      for (const child of root.children) {
        dfsTraverse(child, cb, depth + 1)
      }
    }
  }
  dfsTraverse(root, cb, 1)
}
dfs(data, (value, layer) => {
  console.log(`${value} is on layer ${layer}`)
})
