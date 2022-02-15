import { RemoveDuplicatesInSortedArray } from '../remove-duplicates-in-sorted-array'

describe('RemoveDuplicatesInSortedArray', () => {
  const rdisa = new RemoveDuplicatesInSortedArray()

  it('RemoveDuplicatesInSortedArray should work properly', () => {
    expect(rdisa.firstSolution([1, 1, 2, 3, 3, 4, 4, 4, 5])).toEqual([
      1,
      2,
      3,
      4,
      5,
    ])

    expect(rdisa.firstSolution([1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 5, 5])).toEqual([
      1,
      2,
      3,
      4,
      5,
    ])
  })
})
