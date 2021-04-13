import { containCycle, LinkedList, LinkedNode } from '../linked-list'

describe('linked list', () => {
  test('linked list constructor', () => {
    const linkedList = new LinkedList(['a', 'b', 'c'])
    console.log(linkedList)
  })

  test('linked list contain cycle', () => {
    const a = new LinkedNode('a')
    const b= new LinkedNode('b')
    const c = new LinkedNode('c')
    const d = new LinkedNode('d')
    a.next = b
    b.next = c
    c.next = d
    d.next = b

    expect(containCycle(a)).toBe(true)
  })
})
