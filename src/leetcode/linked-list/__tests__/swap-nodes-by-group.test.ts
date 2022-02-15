import { LinkedList } from '../../../linked-list/linked-list'
import { SwapNodesByGroup } from '../swap-nodes-by-group'

describe('SwapNodesByGroup', () => {
  const snbg = new SwapNodesByGroup()

  it('SwapNodesByGroup should work properly', () => {
    let linkedList = new LinkedList([1, 2, 3, 4, 5, 6])
    expect(snbg.firstSolution(linkedList.head, 4)).toEqual([4, 3, 2, 1, 5, 6])

    linkedList = new LinkedList([1, 2, 3, 4, 5, 6])
    expect(snbg.firstSolution(linkedList.head, 3)).toEqual([3, 2, 1, 6, 5, 4])

    linkedList = new LinkedList([1, 2, 3, 4, 5, 6, 7])
    expect(snbg.firstSolution(linkedList.head, 7)).toEqual([
      7,
      6,
      5,
      4,
      3,
      2,
      1,
    ])
  })
})
