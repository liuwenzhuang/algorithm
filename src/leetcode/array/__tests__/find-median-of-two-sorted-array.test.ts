import {
  findMedianInSingleArray,
  findMedianOfFourNum,
  findMedianOfThreeNum,
  findMedianOfTwoSortedArray,
} from '../find-median-of-two-sorted-array'

describe('find median in two sorted array', () => {
  it('findMedianInSingleArray should return median of single array', () => {
    expect(findMedianInSingleArray([1, 2])).toBe(1.5)
    expect(findMedianInSingleArray([1, 2, 3])).toBe(2)
    expect(findMedianInSingleArray([1, 2, 3, 4])).toBe(2.5)
  })

  it('findMedianOfThreeNum should return median of three nums', () => {
    expect(findMedianOfThreeNum(1, 2, 3)).toBe(2)
    expect(findMedianOfThreeNum(1, 3, 2)).toBe(2)
    expect(findMedianOfThreeNum(2, 1, 3)).toBe(2)
    expect(findMedianOfThreeNum(2, 3, 1)).toBe(2)
    expect(findMedianOfThreeNum(3, 2, 1)).toBe(2)
    expect(findMedianOfThreeNum(3, 1, 2)).toBe(2)
  })

  it('findMedianOfFourNum should return median of four nums', () => {
    expect(findMedianOfFourNum(1, 2, 3, 4)).toBe(2.5)
    expect(findMedianOfFourNum(1, 3, 2, 4)).toBe(2.5)
    expect(findMedianOfFourNum(1, 4, 2, 3)).toBe(2.5)
    expect(findMedianOfFourNum(4, 3, 2, 1)).toBe(2.5)
  })

  it('findMedianOfTwoSortedArray', () => {
    expect(findMedianOfTwoSortedArray([5], [8])).toBe(6.5)
    expect(findMedianOfTwoSortedArray([2, 5], [8])).toBe(5)
    expect(findMedianOfTwoSortedArray([5, 8], [2])).toBe(5)
    expect(
      findMedianOfTwoSortedArray([5, 17, 18, 19, 20], [4, 6, 11, 13, 14, 15])
    ).toBe(14)
    expect(findMedianOfTwoSortedArray([5, 17, 29], [4, 6, 11, 13, 14])).toBe(12)
    expect(findMedianOfTwoSortedArray([5, 6, 8], [4, 6, 11, 13, 14])).toBe(7)
  })
})
