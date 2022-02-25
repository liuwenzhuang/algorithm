import { CombinationSum2 } from '../0040-combination-sum-2'

describe('CombinationSum2', () => {
  const combinationSum2 = new CombinationSum2()
  it('CombinationSum2 should work properly', () => {
    expect(combinationSum2.firstSolution([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ])
    expect(combinationSum2.firstSolution([2, 5, 2, 1, 2], 5)).toEqual([
      [1, 2, 2],
      [5],
    ])
  })
})
