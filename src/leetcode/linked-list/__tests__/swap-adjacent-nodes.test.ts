import { LinkedList } from '../../../linked-list/linked-list'
import { SwapAdjacentNodes } from '../swap-adjacent-nodes'

describe('SwapAdjacentNodes', () => {
  const san = new SwapAdjacentNodes()

  it('SwapAdjacentNodes.firstSolution should work properly', () => {
    expect(san.firstSolution(new LinkedList([1]).head)).toEqual([1])
    expect(san.firstSolution(new LinkedList([1, 3, 2, 4]).head)).toEqual([
      3,
      1,
      4,
      2,
    ])
    expect(
      san.firstSolution(new LinkedList([1, 3, 2, 4, 8, 7, 11]).head)
    ).toEqual([3, 1, 4, 2, 7, 8, 11])
  })

  it('SwapAdjacentNodes.recursiveSolution should work properly', () => {
    expect(san.recursiveSolution(new LinkedList([1]).head)).toEqual([1])
    expect(san.recursiveSolution(new LinkedList([1, 3, 2, 4]).head)).toEqual([
      3,
      1,
      4,
      2,
    ])
    expect(
      san.recursiveSolution(new LinkedList([1, 3, 2, 4, 8, 7, 11]).head)
    ).toEqual([3, 1, 4, 2, 7, 8, 11])
  })
})
