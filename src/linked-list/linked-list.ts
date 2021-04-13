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
  public list: LinkedNode<T>
  constructor(arr: T[]) {
    if (arr.length) {
      const head = new LinkedNode(arr[0])
      let currentNode = head
      for (let i = 1, len = arr.length; i < len; i++) {
        currentNode = currentNode.append(arr[i])
      }
      this.list = head
    }
  }
}

export function containCycle(startNode: LinkedNode) {
  let node = startNode
  const visitedNodes = []
  while(node) {
    if (visitedNodes.findIndex(item => item === node) !== -1) {
      return true
    }
    visitedNodes.push(node)
    node = node.next
  }
  return false
}
