import { LinkedList, logLinkedList } from '../../linked-list/linked-list'
import { RotateLinkedList } from '../0061-rotate-linked-list'

describe('RotateLinkedList', () => {
  const rotateLinkedList = new RotateLinkedList()
  it('RotateLinkedList should work properly', () => {
    let result = rotateLinkedList.firstSolution(
      new LinkedList([0, 1, 2]).head,
      1
    )
    expect(logLinkedList(result)).toEqual([2, 0, 1])
    // 1 等价于 1 * len + 1
    result = rotateLinkedList.firstSolution(new LinkedList([0, 1, 2]).head, 4)
    expect(logLinkedList(result)).toEqual([2, 0, 1])
    // 1 等价于 2 * len + 1
    result = rotateLinkedList.firstSolution(new LinkedList([0, 1, 2]).head, 7)
    expect(logLinkedList(result)).toEqual([2, 0, 1])

    result = rotateLinkedList.firstSolution(new LinkedList([0, 1, 2]).head, 2)
    expect(logLinkedList(result)).toEqual([1, 2, 0])
    result = rotateLinkedList.firstSolution(new LinkedList([0, 1, 2]).head, 5)
    expect(logLinkedList(result)).toEqual([1, 2, 0])

    result = rotateLinkedList.firstSolution(new LinkedList([0, 1, 2]).head, 3)
    expect(logLinkedList(result)).toEqual([0, 1, 2])
    result = rotateLinkedList.firstSolution(new LinkedList([0, 1, 2]).head, 6)
    expect(logLinkedList(result)).toEqual([0, 1, 2])

    result = rotateLinkedList.firstSolution(
      new LinkedList([1, 2, 3, 4, 5]).head,
      1
    )
    expect(logLinkedList(result)).toEqual([5, 1, 2, 3, 4])

    result = rotateLinkedList.firstSolution(
      new LinkedList([1, 2, 3, 4, 5]).head,
      2
    )
    expect(logLinkedList(result)).toEqual([4, 5, 1, 2, 3])
  })
})
