import { Stack } from '../stack'

describe('Stack should be LIFO', () => {
  test('push add item at tail', () => {
    const stack = new Stack<number>()
    stack.push(2)
    stack.push(3)

    expect(stack.peek()).toBe(3)
  })

  test('pop remove item at tail and return', () => {
    const stack = new Stack<number>()
    stack.push(2)
    stack.push(3)

    expect(stack.size).toBe(2)
    const popValue = stack.pop()
    expect(popValue).toBe(3)
    expect(stack.size).toBe(1)
  })

  test('pop should return null when size is 0', () => {
    const stack = new Stack()
    expect(stack.pop()).toBeNull()
  })
})
