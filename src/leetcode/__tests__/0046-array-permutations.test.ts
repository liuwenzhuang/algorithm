import { ArrayPermutations } from '../0046-array-permutations'

describe('ArrayPermutations', () => {
  const arrayPermutations = new ArrayPermutations()
  it('ArrayPermutations.firstSolution should work properly', () => {
    expect(arrayPermutations.firstSolution([1, 2, 3])).toEqual([
      [1, 2, 3],
      [2, 1, 3],
      [2, 3, 1],
      [1, 3, 2],
      [3, 1, 2],
      [3, 2, 1],
    ])

    expect(arrayPermutations.firstSolution([0, 1])).toEqual([
      [0, 1],
      [1, 0],
    ])

    expect(arrayPermutations.firstSolution([1])).toEqual([[1]])
  })

  it('ArrayPermutations.backtrackSolution should work properly', () => {
    expect(arrayPermutations.backtrackSolution([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])

    expect(arrayPermutations.backtrackSolution([0, 1])).toEqual([
      [0, 1],
      [1, 0],
    ])

    expect(arrayPermutations.backtrackSolution([1])).toEqual([[1]])
  })
})
