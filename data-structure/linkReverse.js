/**
 * 生成长度为 numbers 的 linkList
 *
 * @param {*} numbers
 * @returns
 */
function generateLink (numbers) {
  function Node (value) {
    this.value = value
    this.next = null
  }
  const linkArray = []
  for (let i = 1; i <= numbers; i++) {
    linkArray.push(new Node(i))
  }
  for (let i = 0; i < linkArray.length - 1; i++) {
    linkArray[i].next = linkArray[i + 1]
  }
  const linkList = linkArray[0]
  return linkList
}

/**
 * 返回打印的 linkList
 *
 * @param {*} linkList
 * @returns
 */
function printLink (linkList) {
  let current = linkList
  let str = ''
  if (!current) return str
  while (current) {
    str = str + current.value + (current.next ? '->' : '')
    current = current.next
  }
  console.log(str)
}

/**
 * 反转链表
 *
 * @param {*} linkList
 * @returns
 */
function reverseLinkList (linkList) {
  if (!linkList) return
  let head = linkList
  let current = head.next
  let next
  head.next = null
  while (current) {
    next = current.next
    current.next = head
    head = current
    current = next
  }
  return head
}
const linkList = generateLink(8)
printLink(linkList)
const reversedLink = reverseLinkList(linkList)
printLink(reversedLink)
