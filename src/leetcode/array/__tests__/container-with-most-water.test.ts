import {
  bruteForceGetMostWater,
  twoPointerGetMostWater,
} from '../container-with-most-water'

describe('getMostWater', () => {
  it('bruteForceGetMostWater should work properly', () => {
    expect(bruteForceGetMostWater([1])).toBeNull()
    expect(bruteForceGetMostWater([1, 1])).toBe(1)
    expect(bruteForceGetMostWater([1, 2, 1])).toBe(2)
    expect(bruteForceGetMostWater([4, 3, 2, 1, 4])).toBe(16)
    expect(bruteForceGetMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
    expect(twoPointerGetMostWater([1, 2, 100, 1, 1, 1, 1, 1, 2])).toBe(14)
  })
  it('twoPointerGetMostWater should work properly', () => {
    expect(twoPointerGetMostWater([1])).toBeNull()
    expect(twoPointerGetMostWater([1, 1])).toBe(1)
    expect(twoPointerGetMostWater([1, 2, 1])).toBe(2)
    expect(twoPointerGetMostWater([4, 3, 2, 1, 4])).toBe(16)
    expect(twoPointerGetMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
    expect(twoPointerGetMostWater([1, 2, 100, 1, 1, 1, 1, 1, 2])).toBe(14)
  })
})
