import { BinarySearch } from '../binary-search'

describe('BinarySearch', () => {
  it('BinarySearch should work for asc arr', () => {
    const bs = new BinarySearch()
    expect(bs.search([1, 2, 3], 2)).toBe(1) // mid
    expect(bs.search([1, 2, 3], 1)).toBe(0) // left
    expect(bs.search([1, 2, 3, 4, 6, 8, 12, 23, 49], 23)).toBe(7) // right
  })

  it('BinarySearch should work for desc arr', () => {
    const bs = new BinarySearch()
    expect(bs.search([3, 2, 1], 2)).toBe(1) // mid
    expect(bs.search([3, 2, 1], 3)).toBe(0) // left
    expect(bs.search([49, 23, 12, 8, 6, 4, 3, 2, 1], 2)).toBe(7) // right
  })

  it('BinarySearch should return -1 instead of not found', () => {
    const bs = new BinarySearch()
    expect(bs.search([1], 2)).toBe(-1)
    expect(bs.search([], 2)).toBe(-1)
  })
})
