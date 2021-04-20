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
}

export function containCycle(startNode: LinkedNode) {
  let node = startNode
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
