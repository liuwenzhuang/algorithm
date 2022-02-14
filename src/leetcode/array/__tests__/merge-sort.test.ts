import { MergeSort } from '../merge-sort'

describe('MergeSort', () => {
  let ms = new MergeSort()

  it('MergeSort should work properly', () => {
    expect(ms.solution([1, 4, 8, 3, 4, 24, 2])).toEqual([1, 2, 3, 4, 4, 8, 24])
  })
})
