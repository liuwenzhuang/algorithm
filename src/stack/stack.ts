export class Stack<T = any> {
  public size: number = 0
  constructor(public data?: T[]) {
    this.data = data ?? []
    this.size = this.data.length
  }

  push(item: T) {
    this.size += 1
    this.data.push(item)
  }

  pop(): T | null {
    if (this.size < 1) {
      return null
    }
    this.size -= 1
    return this.data.pop()
  }

  /**
   * 最上方的元素
   * @returns
   */
  peek(): T | null {
    if (this.size < 1) {
      return null
    }
    return this.data[this.size - 1]
  }
}
