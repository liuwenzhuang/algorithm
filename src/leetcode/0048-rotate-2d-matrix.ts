/**
 * @fileoverview
 * https://leetcode.com/problems/rotate-image/
 * (matrix: number[][]) => number[][]
 */

export class Rotate2DMatrix {
  firstSolution(matrix: number[][]) {
    // const test = [
    //   [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9],
    // ]
    // 1 3 9 7 轮换，2 6 8 4 轮换
    // [0, 0] -> [0, 2]  [0, 1] -> [1, 2]  [0, 2] -> [2, 2]
    // [1, 0] -> [0, 1]  [1, 1] -> [1, 1]  [1, 2] -> [2, 1]
    // [2, 0] -> [0, 0]  [2, 1] -> [1, 0]  [2, 2] -> [2, 0]
    const len = matrix.length
    for (let i = 0; i < Math.ceil(len / 2); i++) {
      for (let j = 0; j < Math.floor(len / 2); j++) {
        const tmp = matrix[i][j] // 1  2
        matrix[i][j] = matrix[len - j - 1][i] // 7 -> 1  4 -> 2
        matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1] // 9 -> 7  8 -> 4
        matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1] // 3 -> 9  6 -> 8
        matrix[j][len - i - 1] = tmp // 1 -> 3  2 -> 6
      }
    }

    return matrix
  }

  transposeAndReflect(matrix: number[][]) {
    // const test = [
    //   [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9],
    // ]

    // transpose(n行变n列):
    // [1, 4, 7]
    // [2, 5, 8]
    // [3, 6, 9]
    const len = matrix.length
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const tmp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = tmp
      }
    }

    // reverse line
    // [7, 4, 1]
    // [8, 5, 2]
    // [9, 6, 3]
    for (let i = 0; i < len; i++) {
      let left = 0
      let right = len - 1
      while (left < right) {
        const tmp = matrix[i][left]
        matrix[i][left] = matrix[i][right]
        matrix[i][right] = tmp
        left++
        right--
      }
    }

    return matrix
  }
}
