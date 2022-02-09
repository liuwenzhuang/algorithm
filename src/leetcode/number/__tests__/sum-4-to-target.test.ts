import { Sum4ToTarget } from '../sum-4-to-target'

describe('Sum4ToTarget', () => {
  let sum4ToTarget = new Sum4ToTarget()

  it('Sum4ToTarget should work properly', () => {
    expect(sum4ToTarget.solution([1, 0, -1, 0, -2, 2], 0)).toEqual([
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ])

    expect(sum4ToTarget.solution([2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]])
  })
})
