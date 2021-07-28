import { findTwoIndexSumEqualTarget } from '../find-two-index-sum-equal-target'

describe('findTwoIndexSumEqualTarget', () => {
  it('findTwoIndexSumEqualTarget should return null when result is not exist', () => {
    expect(findTwoIndexSumEqualTarget([1, 3, 6, 4], 11)).toBeNull()
    expect(findTwoIndexSumEqualTarget([], 11)).toBeNull()
    expect(findTwoIndexSumEqualTarget(null, 11)).toBeNull()
  })
  it('findTwoIndexSumEqualTarget should return tuple when result is exist', () => {
    expect(findTwoIndexSumEqualTarget([1, 3, 6, 4], 10)).toEqual([2, 3])
  })
  it('findTwoIndexSumEqualTarget should return latter tuple when num duplicate', () => {
    expect(findTwoIndexSumEqualTarget([1, 3, 6, 6, 4], 10)).toEqual([3, 4])
  })
})
