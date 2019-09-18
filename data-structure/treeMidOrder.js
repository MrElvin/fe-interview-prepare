/**
 *              1
 *           /    \
 *         2      3
 *        /     /  \
 *      4     5    6
 */

/**
 * 构造一个如上图的树
 *
 * @returns
 */
function generateTree () {
  /**
   * 树节点构造函数
   *
   * @param {*} value
   */
  function TreeNode (value) {
    this.value = value
    this.left = null
    this.right = null
  }
  const root = new TreeNode(1)
  const node2 = new TreeNode(2)
  const node3 = new TreeNode(3)
  const node4 = new TreeNode(4)
  const node5 = new TreeNode(5)
  const node6 = new TreeNode(6)
  root.left = node2
  node2.left = node4
  root.right = node3
  node3.left = node5
  node3.right = node6
  return root
}
/**
 * 实现树的中序遍历（递归版）
 *
 * @param {*} root
 * @param {*} cb
 */
function treeMidOrder (root, cb) {
  if (!root) return
  treeMidOrder(root.left, cb)
  cb(root)
  treeMidOrder(root.right, cb)
}
/**
 * 实现树的中序遍历（非递归版）
 *
 * @param {*} root
 * @param {*} cb
 */
function treeMidOrderNormal (root, cb) {
  if (!root) return
  const stack = []
  let node = root
  while (stack.length || node) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      cb(node)
      node = node.right
    }
  }
}

const tree = generateTree()
treeMidOrder(tree, node => console.log(node.value))
console.log('-------------')
treeMidOrderNormal(tree, node => console.log(node.value))
