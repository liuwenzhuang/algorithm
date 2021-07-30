import { LinkedList } from '../../../linked-list/linked-list'
import { addTwoLinkedList } from '../add-two-linked-list'

describe('addTwoLinkedList', () => {
  it('addTwoLinkedList should balala', () => {
    let linkedList1 = new LinkedList([5, 6, 4], false)
    let linkedList2 = new LinkedList([2, 4, 3], false)
    expect(addTwoLinkedList(linkedList1.head, linkedList2.head)).toEqual([
      7,
      0,
      8,
    ])

    linkedList1 = new LinkedList([9, 9, 9, 9, 9, 9, 9], false)
    linkedList2 = new LinkedList([9, 9, 9, 9], false)
    expect(addTwoLinkedList(linkedList1.head, linkedList2.head)).toEqual([
      8,
      9,
      9,
      9,
      0,
      0,
      0,
      1,
    ])

    linkedList1 = new LinkedList([0], false)
    linkedList2 = new LinkedList([0], false)
    expect(addTwoLinkedList(linkedList1.head, linkedList2.head)).toEqual([0])
  })
})
