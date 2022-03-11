import { FillSpiralMartix } from '../0059-fill-spiral-martix'

describe('FillSpiralMartix', () => {
  const fillSpiralMartix = new FillSpiralMartix()
  it('FillSpiralMartix should work properly', () => {
    expect(fillSpiralMartix.firstSolution(1)).toEqual([[1]])
    expect(fillSpiralMartix.firstSolution(2)).toEqual([
      [1, 2],
      [4, 3],
    ])
    expect(fillSpiralMartix.firstSolution(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ])
    expect(fillSpiralMartix.firstSolution(4)).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ])
  })
})
