/**
 * @fileoverview
 * https://leetcode.com/problems/spiral-matrix/
 * (matrix: number[][]) => number[]
 * 螺旋型遍历输出二维矩阵
 */

export class SpiralMatrix {
  /**
   * 递归
   * @param matrix
   * @returns
   */
  firstSolution(matrix: number[][]) {
    // row 0  col 0 ~ n
    // col n  row 1 ~ n
    // row n  col 0 row n-1 ~ 1
    // row 1  col 1 ~ n-1
    const result: number[] = []
    const rowCount = matrix.length
    const colCount = matrix[0].length

    const loop = (row = 0, col = 0) => {
      if (result.length === rowCount * colCount) {
        return result
      }
      // 左上 -> 右上
      for (let colNo = col; colNo <= colCount - col - 1; colNo++) {
        result.push(matrix[row][colNo])
      }
      // 右上（不包含） -> 右下
      for (let rowNo = row + 1; rowNo <= rowCount - row - 1; rowNo++) {
        result.push(matrix[rowNo][colCount - col - 1])
      }
      // 右下（不包含） -> 左下
      for (
        let colNo = colCount - col - 1 - 1;
        colNo >= col && row < rowCount - row - 1;
        colNo--
      ) {
        result.push(matrix[rowCount - row - 1][colNo])
      }
      // 左下（不包含） -> 左上（不包含）
      for (let rowNo = rowCount - row - 1 - 1; rowNo > row; rowNo--) {
        result.push(matrix[rowNo][col])
      }
      loop(row + 1, col + 1)
    }

    loop()
    return result
  }

  linearSolution(matrix: number[][]) {
    const result: number[] = []
    const rowCount = matrix.length
    const colCount = matrix[0].length
    let left = 0
    let top = 0
    let right = colCount - 1
    let bottom = rowCount - 1

    while (result.length < rowCount * colCount) {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      if (top + 1 <= bottom) {
        // 有向下的余地
        for (let j = top + 1; j <= bottom; j++) {
          result.push(matrix[j][right])
        }
        for (let i = right - 1; i >= left; i--) {
          result.push(matrix[bottom][i])
        }
        for (let j = bottom - 1; j > top; j--) {
          result.push(matrix[j][left])
        }
      }
      left++
      right--
      top++
      bottom--
    }

    return result
  }
}
