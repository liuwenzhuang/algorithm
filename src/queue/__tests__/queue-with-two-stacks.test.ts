import { hasOwnProperty } from '../../helper/util'
import { QueueWithTwoStacks } from '../queue-with-two-stacks'

describe('QueueWithTwoStacks', () => {
  test('queue has two stack', () => {
    const queue = new QueueWithTwoStacks()
    expect(hasOwnProperty(queue, 'inStack')).toBe(true)
    expect(hasOwnProperty(queue, 'outStack')).toBe(true)
  })

  test('enqueue and dequeue work properly', () => {
    const queue = new QueueWithTwoStacks()
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')

    expect(queue.inStack.data).toEqual(['a', 'b', 'c'])

    let dequeueItem = queue.dequeue()
    expect(dequeueItem).toBe('a')

    queue.enqueue('d')

    dequeueItem = queue.dequeue()
    expect(dequeueItem).toBe('b')
  })
})
