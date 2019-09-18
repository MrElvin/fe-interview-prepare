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
 * 实现一个 bfs 函数，对每个节点执行 callback
 *
 * @param {*} root
 * @param {*} cb
 */
function bfs (root, cb) {
  const queue = []
  const layerQueue = []
  if (!root) return
  queue.push(root)
  layerQueue.push(1)
  while (queue.length) {
    const node = queue.shift()
    let layer = layerQueue.shift()
    cb(node.value, layer)
    if (node.children) {
      queue.push(...node.children)
      layer++
      for (let i = 0; i < node.children.length; i++) {
        layerQueue.push(layer)
      }
    }
  }
}
bfs(data, (value, layer) => {
  console.log(`${value} is on layer ${layer}`)
})
