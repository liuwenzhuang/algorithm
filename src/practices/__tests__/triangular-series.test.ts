import { TriangularSeries } from '../triangular-series'

describe('TriangularSeries', () => {
  it('triangular series sum', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    const n = arr.length

    const actualSum = arr.reduce((acc, cur) => acc + cur, 0)
    const expected = (n * n + n) / 2

    expect(expected).toBe(actualSum)
  })

  it('findRepeat by triangular series', () => {
    const arr = [1, 2, 3, 4, 5, 3, 6, 7, 8]
    expect(new TriangularSeries().findRepeatNum(arr)).toBe(3)
  })
})
