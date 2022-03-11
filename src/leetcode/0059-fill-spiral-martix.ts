/**
 * @fileoverview
 * https://leetcode.com/problems/spiral-matrix-ii/
 * (n: number) => number[][]
 * n * n 矩阵，从 1 开始递增螺旋填充完成
 */

import { gen2DArray } from '../helper/util'

export class FillSpiralMartix {
  firstSolution(n: number) {
    let top = 0
    let left = 0
    let right = n - 1
    let bottom = n - 1
    let fill = 0

    const result = gen2DArray<number>(n, n)
    while (fill < n * n) {
      for (let i = left; i <= right; i++) {
        result[top][i] = ++fill
      }
      if (top < bottom) {
        for (let j = top + 1; j <= bottom; j++) {
          result[j][right] = ++fill
        }
        for (let i = right - 1; i >= left; i--) {
          result[bottom][i] = ++fill
        }
        for (let j = bottom - 1; j > top; j--) {
          result[j][left] = ++fill
        }
      }
      top++
      left++
      right--
      bottom--
    }

    return result
  }
}
