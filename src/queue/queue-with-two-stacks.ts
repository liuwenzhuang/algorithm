/**
 * @fileoverview 使用两个栈实现队列
 * enqueue: O(1)
 * dequeue: O(n)
 */

import { Stack } from '../stack/stack'

export class QueueWithTwoStacks {
  inStack: Stack = new Stack()
  outStack: Stack = new Stack()

  enqueue(item) {
    this.inStack.push(item)
  }

  dequeue() {
    // 出队列时，如果 outStack 为空，将 inStack 中的数据都 pop 出来存入 outStack，达到逆序的效果
    // 此后 inStack 保留的是新一批的先后关系，outStack 保留的是老一批的先后关系
    if (this.outStack.size === 0) {
      while (this.inStack.size > 0) {
        const newestItem = this.inStack.pop()
        this.outStack.push(newestItem)
      }

      if (this.outStack.size === 0) {
        return null
      }
    }

    return this.outStack.pop()
  }
}
