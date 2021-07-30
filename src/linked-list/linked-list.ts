import { hasOwnProperty } from '../helper/util'

export class LinkedNode<T = any> {
  public next: LinkedNode<T>
  constructor(public value: T) {
    this.value = value
    this.next = null
  }

  append(value: T) {
    const newNode = new LinkedNode(value)
    this.next = newNode
    return newNode
  }
}

export class LinkedList<T = any> {
  public head: LinkedNode<T> = null
  public tail: LinkedNode<T> = null

  constructor(arr: T[], allowCycle = true) {
    if (arr.length) {
      const head = new LinkedNode(arr[0])
      let valueNodeMap = new Map<T, LinkedNode<T>>()
      valueNodeMap.set(head.value, head)

      let currentNode = head
      for (let i = 1, len = arr.length; i < len; i++) {
        const value = arr[i]
        if (allowCycle && valueNodeMap.has(value)) {
          currentNode.next = valueNodeMap.get(value)
          currentNode = currentNode.next
        } else {
          currentNode = currentNode.append(arr[i])
          valueNodeMap.set(value, currentNode)
        }
      }
      valueNodeMap = null
      this.head = head
      this.tail = currentNode
    }
  }

  checkContainCycle() {
    return containCycle(this.head)
  }

  log() {
    return logLinkedList(this.head)
  }
}

/**
 * 将链表打印出来
 * @param head
 * @returns
 */
export function logLinkedList(head: LinkedNode) {
  const valueResult = []
  let currentNode = head
  while (currentNode) {
    valueResult.push(currentNode.value)
    currentNode = currentNode.next
  }
  return valueResult
}

/**
 * O(n) 时间 和 O(n) 空间 检测单链表是否含有环
 * @param startNode 链表的头结点
 * @returns
 */
export function containCycle(head: LinkedNode) {
  let node = head
  const visitedNodes = []
  while (node) {
    if (visitedNodes.findIndex((item) => item === node) !== -1) {
      return true
    }
    visitedNodes.push(node)
    node = node.next
  }
  return false
}

/**
 * O(n) 时间和 O(1) 空间 检测单链表是否含有环
 * @param head
 * @returns
 */
export function optimizeContainCycle(head: LinkedNode) {
  // 如果有环，faterRunner 会追上 slowerRunner，否则 fasterRunnber 会直接到达尾部
  let fasterRunner = head
  let slowerRunner = head

  while (fasterRunner && fasterRunner.next) {
    slowerRunner = slowerRunner.next
    fasterRunner = fasterRunner.next.next

    if (fasterRunner === slowerRunner) {
      return true
    }
  }

  return false
}

/**
 * 将链表反向 in-place O(n) 时间 + O(1) 空间
 * a -> b -> c -> null
 * c -> b -> a -> null
 * @param head
 * @returns
 */
export function reverseLinkedList(head: LinkedNode) {
  let currentNode = head
  let prevNode = null
  let nextNode = null

  while (currentNode) {
    nextNode = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode
    currentNode = nextNode
  }

  return prevNode
}

/**
 * 找到链表倒数第 k 个 node, O(n) 时间 + O(1) 空间
 * 时间复杂度：O(n) + O(k) = O(2n)，即 O(n)
 * a -> b -> c -> d -> e -> f -> null
 * 找到链表的长度 n，倒数第 k 个 node 即正数第 n - k 个，
 * @param head
 * @param k
 */
export function findKthLastNodeWithLength(head: LinkedNode, k: number) {
  if (k <= 0) {
    return null
  }

  let currentNode = head
  let n = 1
  while (currentNode.next) {
    currentNode = currentNode.next
    n++
  }

  if (k > n) {
    // 超出链表长度
    return null
  }

  currentNode = head
  for (let i = 0; i < n - k; i++) {
    currentNode = currentNode.next
  }

  return currentNode
}

/**
 * 找到链表倒数第 k 个 node, O(n) 时间 + O(1) 空间
 * left      right     left      right
 * |---------|         |---------|
 * a -> b -> c -> d -> e -> f -> g -> null
 * 使用 right 锚定正数第 k 个 node，left 表示头，
 * 如果 right 和 left 之间的距离保持不变，将它们往后移动，直到 right 到达尾，
 * 此时 left 即倒数第 k 个节点
 *
 * 和上面的 findKthLastNodeWithLength 方案对比来看其实时间是一样的，区别只在于上一种方案是
 * 同一个指针从头遍历到尾，然后又从头遍历到目标节点；而本方案 right 同样是从头到尾，left 从头到目标节点
 * @param head
 * @param k
 */
export function findKthLastNodeWithTwoPointers(head: LinkedNode, k: number) {
  if (k <= 0) {
    return null
  }

  let left = head
  let right = head

  for (let i = 1; i < k; i++) {
    if (!right.next) {
      // k 超出链表节点的数量
      return null
    }
    // 锚定正数第 k 个 node
    right = right.next
  }

  while (right.next) {
    right = right.next
    left = left.next
  }

  return left
}
