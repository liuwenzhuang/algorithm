import { sum3ToZero } from '../sum-3-to-zero'

describe('sum3ToZero', () => {
  it('sum3ToZero should properly', () => {
    expect(sum3ToZero([-1])).toEqual([])
    expect(sum3ToZero([])).toEqual([])
    expect(sum3ToZero([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
    expect(sum3ToZero([-5, -1, -1, -1, 0, 1, 3, 2, 2, 2])).toEqual([
      [-5, 2, 3],
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  })
