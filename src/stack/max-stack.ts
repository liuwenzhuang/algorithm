/**
 * @fileoverview get max value in O(1) time
 */

import { Stack } from './stack'

export class MaxStack {
  data: Stack<number> = new Stack([])
  /**
   * 维护最大值的栈
   */
  maxValues: Stack<number> = new Stack([])

  push(item: number) {
    this.data.push(item)

    const curMaxValue = this.maxValues.peek()
    if (curMaxValue === null || item >= curMaxValue) {
      this.maxValues.push(item)
    }
  }

  pop() {
    const popValue = this.data.pop()
    if (popValue === this.maxValues.peek()) {
      this.maxValues.pop()
    }
    return popValue
  }

  getMax() {
    return this.maxValues.peek()
  }
}
