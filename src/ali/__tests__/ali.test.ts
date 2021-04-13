import { climb, otherClimb } from '../climb'
import { findMaxRepeat } from '../findMost'

describe('findMost', () => {
  test('findMost', () => {
    const arr = [1, 2, 3, 4, 5, 1, 8, 3, 9, 4, 3, 12, 3]
    const { mostValue, mostCount, index } = findMaxRepeat(arr)
    expect(mostValue).toBe(3)
    expect(mostCount).toBe(4)
    expect(index).toBe(2)
  })

  test('climb', () => {
    expect(climb(3)).toBe(3)
    expect(climb(4)).toBe(5)
  })

  test('otherclimb', () => {
    expect(otherClimb(1)).toBe(1)
    expect(otherClimb(2)).toBe(2)
    expect(otherClimb(3)).toBe(3)
    expect(otherClimb(4)).toBe(5)
  })
})
