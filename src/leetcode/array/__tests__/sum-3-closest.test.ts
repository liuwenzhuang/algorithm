import { Sum3Closest } from '../sum-3-closest'

describe('Sum3Closest', () => {
  let sum3Closest = new Sum3Closest()

  it('Sum3Closest.bruteForce should work properly', () => {
    const bruteForce = sum3Closest.bruteForce
    expect(bruteForce([-1, 2, 1, -4], 1)).toBe(2)
    expect(bruteForce([0, 0, 0], 1)).toBe(0)
    expect(bruteForce([-5, -1, -1, -1, 0, 2, 1, 1, 1], 0)).toBe(0)
    expect(bruteForce([-5, -1, 3, 3, 0, -2, -2, 1, 1, 1], 0)).toBe(0)
  })

  it('Sum3Closest.sortedEfficent should work properly', () => {
    const sortedEfficent = sum3Closest.sortedEfficent
    expect(sortedEfficent([-1, 2, 1, -4], 1)).toBe(2)
    expect(sortedEfficent([0, 0, 0], 1)).toBe(0)
    expect(sortedEfficent([-5, -1, -1, -1, 0, 2, 1, 1, 1], 0)).toBe(0)
    expect(sortedEfficent([-5, -1, 3, 3, 0, -2, -2, 1, 1, 1], 0)).toBe(0)
  })
})
