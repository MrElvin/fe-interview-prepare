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
 * 实现树的后序遍历（递归版）
 *
 * @param {*} root
 * @param {*} cb
 */
function treePostOrder (root, cb) {
  if (!root) return
  treePostOrder(root.left, cb)
  treePostOrder(root.right, cb)
  cb(root)
}

/**
 * 实现树的后序遍历（非递归版）
 *
 * @param {*} root
 * @param {*} cb
 */
function treePostOrderNormal (root, cb) {
  if (!root) return
  const stack = [root]
  let parent = null
  let lastVisited = ''
  while (stack.length) {
    parent = stack[stack.length - 1]
    if (parent.left && parent.left !== lastVisited && parent.right !== lastVisited) {
      stack.push(parent.left)
    } else if (parent.right && parent.right !== lastVisited) {
      stack.push(parent.right)
    } else {
      lastVisited = stack.pop()
      cb(lastVisited)
    }
  }
}

const tree = generateTree()
treePostOrder(tree, node => console.log(node.value))
console.log('-------------')
treePostOrderNormal(tree, node => console.log(node.value))
