import { ArrayPermutations2 } from '../0047-array-permutations-2'

describe('ArrayPermutations2', () => {
  const arrayPermutations2 = new ArrayPermutations2()
  it('ArrayPermutations2 should work properly', () => {
    expect(arrayPermutations2.backtrackSolution([1, 1, 2])).toEqual([
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ])
  })
})
