import {
  containCycle,
  LinkedList,
  LinkedNode,
  optimizeContainCycle,
} from '../linked-list'

describe('linked list', () => {
  test('linked list constructor', () => {
    const linkedList = new LinkedList(['a', 'b', 'c'])
    expect(linkedList.head.value).toBe('a')
    expect(linkedList.tail.value).toBe('c')
    expect(linkedList.tail.next).toBeNull()
  })

  test('linked list contain cycle', () => {
    const a = new LinkedNode('a')
    const b = new LinkedNode('b')
    const c = new LinkedNode('c')
    const d = new LinkedNode('d')
    a.next = b
    b.next = c
    c.next = d
    d.next = b

    expect(containCycle(a)).toBe(true)
    expect(optimizeContainCycle(a)).toBe(true)

    const a1 = new LinkedNode('a1')
    expect(containCycle(a1)).toBe(false)
    expect(optimizeContainCycle(a1)).toBe(false)

    const a2 = new LinkedNode('a2')
    a2.next = a2
    expect(containCycle(a2)).toBe(true)
    expect(optimizeContainCycle(a2)).toBe(true)

    const linkedList = new LinkedList(['a', 'b', 'c', 'd', 'b'])
    expect(linkedList.checkContainCycle()).toBe(true)
  })
})
