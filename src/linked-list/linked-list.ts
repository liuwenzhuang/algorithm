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

  constructor(arr: T[]) {
    if (arr.length) {
      const head = new LinkedNode(arr[0])
      // FIXME: toString maybe not exists and maybe duplicated
      const valueNodeMap = {
        [head.value.toString()]: head,
      }
      let currentNode = head
      for (let i = 1, len = arr.length; i < len; i++) {
        const value = arr[i].toString()
        if (hasOwnProperty(valueNodeMap, value)) {
          currentNode.next = valueNodeMap[value]
          currentNode = currentNode.next
        } else {
          currentNode = currentNode.append(arr[i])
          valueNodeMap[value] = currentNode
        }
      }
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
