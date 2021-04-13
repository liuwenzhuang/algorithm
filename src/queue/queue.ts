export class Queue<T = any> {
  public size: number = 0
  constructor(public queue?: T[]) {
    this.queue = queue ?? []
    this.size = this.queue.length
  }

  enqueue(item: T) {
    this.size += 1
    this.queue.push(item)
  }

  dequeue(): T | undefined {
    if (this.size > 0) {
      this.size -= 1
      return this.queue.shift()
    }
  }
}
