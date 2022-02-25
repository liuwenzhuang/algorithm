import { FirstMissingPositive } from '../0041-first-missing-positive'

describe('FirstMissingPositive', () => {
  const firstMissingPositive = new FirstMissingPositive()
  it('FirstMissingPositive.insertionSort should work properly', () => {
    expect(firstMissingPositive.insertionSort([4, 3, 2, 1])).toEqual([
      1,
      2,
      3,
      4,
    ])
  })

  it('FirstMissingPositive.firstSolution should work properly', () => {
    // expect(firstMissingPositive.firstSolution([1, 2, 0])).toBe(3)
    // expect(firstMissingPositive.firstSolution([3, 4, -1, 1])).toBe(2)
    expect(firstMissingPositive.firstSolution([7, 8, 9, 11, 12])).toBe(1)
  })
})
