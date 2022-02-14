import { LinkedList } from '../../../linked-list/linked-list'
import { MergeNSortedLinkedList } from '../merge-n-sorted-linked-list'

describe('MergeNSortedLinkedList', () => {
  let mnsll = new MergeNSortedLinkedList()

  it('MergeNSortedLinkedList.firstSolution should work properly', () => {
    expect(mnsll.firstSolution([])).toEqual([])
    expect(
      mnsll.firstSolution([
        new LinkedList([1, 4, 5]).head,
        new LinkedList([1, 3, 4]).head,
        new LinkedList([2, 6]).head,
      ])
    ).toEqual([1, 1, 2, 3, 4, 4, 5, 6])
  })
})
