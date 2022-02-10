import { LinkedList } from '../../../linked-list/linked-list'
import { RemoveNthNodeFromEnd } from '../remove-nth-node-from-end'

describe('RemoveNthNodeFromEnd', () => {
  let removeNthNodeFromEnd = new RemoveNthNodeFromEnd()

  it('RemoveNthNodeFromEnd should work properly', () => {
    let linkedList = new LinkedList([5, 6, 4], false)
    expect(removeNthNodeFromEnd.solution(linkedList.head, 1)).toEqual([5, 6]) // 尾

    linkedList = new LinkedList([5, 6, 4], false)
    expect(removeNthNodeFromEnd.solution(linkedList.head, 2)).toEqual([5, 4]) // 中

    linkedList = new LinkedList([5, 6, 4], false)
    expect(removeNthNodeFromEnd.solution(linkedList.head, 3)).toEqual([6, 4]) // 头

    linkedList = new LinkedList([5, 6, 4, 8], false)
    expect(removeNthNodeFromEnd.solution(linkedList.head, 3)).toEqual([5, 4, 8])

    linkedList = new LinkedList([5], false)
    expect(removeNthNodeFromEnd.solution(linkedList.head, 1)).toEqual([])
  })
})
