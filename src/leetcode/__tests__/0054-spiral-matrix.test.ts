import { SpiralMatrix } from '../0054-spiral-matrix'

describe('SpiralMatrix', () => {
  const spiralMatrix = new SpiralMatrix()
  it('SpiralMatrix.firstSolution should work properly', () => {
    expect(spiralMatrix.firstSolution([[1, 2]])).toEqual([1, 2])
    expect(spiralMatrix.firstSolution([[1], [2]])).toEqual([1, 2])

    expect(
      spiralMatrix.firstSolution([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])

    expect(
      spiralMatrix.firstSolution([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ])
    ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])

    expect(
      spiralMatrix.firstSolution([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
      ])
    ).toEqual([
      1,
      2,
      3,
      4,
      5,
      10,
      15,
      20,
      25,
      30,
      29,
      28,
      27,
      26,
      21,
      16,
      11,
      6,
      7,
      8,
      9,
      14,
      19,
      24,
      23,
      22,
      17,
      12,
      13,
      18,
    ])
  })

  it('SpiralMatrix.linearSolution should work properly', () => {
    expect(spiralMatrix.linearSolution([[1, 2]])).toEqual([1, 2])
    expect(spiralMatrix.linearSolution([[1], [2]])).toEqual([1, 2])

    expect(
      spiralMatrix.linearSolution([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])

    expect(
      spiralMatrix.linearSolution([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ])
    ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])

    expect(
      spiralMatrix.linearSolution([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
      ])
    ).toEqual([
      1,
      2,
      3,
      4,
      5,
      10,
      15,
      20,
      25,
      30,
      29,
      28,
      27,
      26,
      21,
      16,
      11,
      6,
      7,
      8,
      9,
      14,
      19,
      24,
      23,
      22,
      17,
      12,
      13,
      18,
    ])
  })
})
