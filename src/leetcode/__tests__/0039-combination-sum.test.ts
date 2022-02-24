import { CombinationSum } from '../0039-combination-sum'

describe('CombinationSum', () => {
  const combinationSum = new CombinationSum()
  it('CombinationSum should work properly', () => {
    expect(combinationSum.firstSolution([2, 3, 6, 7], 7)).toEqual([
      [2, 2, 3],
      [7],
    ])
    expect(combinationSum.firstSolution([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ])
    expect(combinationSum.firstSolution([2], 1)).toEqual([])
  })
})
