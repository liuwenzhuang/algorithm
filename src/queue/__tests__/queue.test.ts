import { Queue } from '../queue'

describe('Queue should be FIFO', () => {
  test('enqueue add item at tail', () => {
    const queue = new Queue<string>()
    queue.enqueue('a')
    expect(queue.size).toBe(1)
  })

  test('dequeue remove item at head', () => {
    const queue = new Queue<string>(['a', 'b', 'c'])
    const head = queue.dequeue()
    expect(head).toBe('a')
  })

  test('dequeue should return undefined when size is 0', () => {
    const queue = new Queue()
    expect(queue.dequeue()).toBeUndefined()
  })
})
