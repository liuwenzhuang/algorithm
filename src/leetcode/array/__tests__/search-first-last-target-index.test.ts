import { SearchFirstLastTargetIndex } from '../search-first-last-target-index'

describe('SearchFirstLastTargetIndex', () => {
  const sflti = new SearchFirstLastTargetIndex()

  it('SearchFirstLastTargetIndex should work properly', () => {
    expect(sflti.firstSolution([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
    expect(sflti.firstSolution([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
    expect(sflti.firstSolution([5, 7, 7, 8, 8, 10], 5)).toEqual([0, 0])
    expect(sflti.firstSolution([], 0)).toEqual([-1, -1])
  })
})
