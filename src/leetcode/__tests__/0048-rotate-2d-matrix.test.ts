import { Rotate2DMatrix } from '../0048-rotate-2d-matrix'

describe('Rotate2DMatrix', () => {
  const rotate2DMatrix = new Rotate2DMatrix()
  it('Rotate2DMatrix.firstSolution should work properly', () => {
    expect(
      rotate2DMatrix.firstSolution([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ])

    expect(
      rotate2DMatrix.firstSolution([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ])
    ).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ])
  })

  it('Rotate2DMatrix.transposeAndReflect should work properly', () => {
    expect(
      rotate2DMatrix.transposeAndReflect([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ])

    expect(
      rotate2DMatrix.transposeAndReflect([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ])
    ).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ])
  })
})
