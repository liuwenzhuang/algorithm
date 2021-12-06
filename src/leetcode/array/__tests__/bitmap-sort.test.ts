import { bitmapSort } from '../bitmap-sort'

describe('bitmapSortTs', () => {
  it('bitmapSortTs should balala', () => {
    const arr = [1, 0, 36, 2, 5, 3]
    expect(bitmapSort(arr, 36)).toEqual([0, 1, 2, 3, 5, 36])
  })
})
