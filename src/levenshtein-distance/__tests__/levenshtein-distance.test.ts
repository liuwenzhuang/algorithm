import { LevenshteinDistance } from '../levenshtein-distance'

describe('LevenshteinDistance', () => {
  let ld: LevenshteinDistance
  beforeEach(() => {
    ld = new LevenshteinDistance()
  })

  it('LevenshteinDistance could get matrix between two arrs', () => {
    expect(ld.getMatrix([1, 2], [2, 3])).toEqual([
      [0, 1, 2],
      [1, 2, 3],
      [2, 1, 2],
    ])

    expect(ld.getMatrix([2, 3], [2, 3])).toEqual([
      [0, 1, 2],
      [1, 0, 1],
      [2, 1, 0],
    ])
  })
})
