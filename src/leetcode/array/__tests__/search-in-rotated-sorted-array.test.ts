import { SearchInRotatedSortedArray } from '../search-in-rotated-sorted-array'

describe('SearchInRotatedSortedArray', () => {
  const sirsa = new SearchInRotatedSortedArray()

  it('SearchInRotatedSortedArray should work properly', () => {
    expect(sirsa.firstSolution([1, 2, 3], 21)).toBe(-1)
    expect(sirsa.firstSolution([9, 10, 11, 1, 2, 3], 9)).toBe(0)
    expect(sirsa.firstSolution([9, 10, 11, 1, 2, 3], 3)).toBe(5)
    expect(sirsa.firstSolution([9, 10, 11, 1, 2, 3], 10)).toBe(1)
    expect(sirsa.firstSolution([9, 10, 11, 1, 2, 3], 2)).toBe(4)
  })
})
