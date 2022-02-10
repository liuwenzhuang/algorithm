import { LinkedList } from '../../../linked-list/linked-list'
import { MergeTwoSortedLinkedList } from '../merge-two-sorted-linked-list'

describe('MergeTwoSortedLinkedList', () => {
  const mergeSortedLinkedList = new MergeTwoSortedLinkedList()

  it('MergeTwoSortedLinkedList should work properly', () => {
    let linkedList1 = new LinkedList([4, 6, 8])
    let linkedList2 = new LinkedList([2, 4, 5])
    expect(
      mergeSortedLinkedList.solution(linkedList1.head, linkedList2.head)
    ).toEqual([2, 4, 4, 5, 6, 8])

    linkedList1 = new LinkedList([2, 4])
    linkedList2 = new LinkedList([2, 4, 5])
    expect(
      mergeSortedLinkedList.solution(linkedList1.head, linkedList2.head)
    ).toEqual([2, 2, 4, 4, 5])

    linkedList1 = new LinkedList([])
    linkedList2 = new LinkedList([2])
    expect(
      mergeSortedLinkedList.solution(linkedList1.head, linkedList2.head)
    ).toEqual([2])

    linkedList1 = new LinkedList([])
    linkedList2 = new LinkedList([])
    expect(
      mergeSortedLinkedList.solution(linkedList1.head, linkedList2.head)
    ).toEqual([])
  })
})
