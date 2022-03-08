/**
 * @fileoverview
 * https://leetcode.com/problems/n-queens-ii/
 * 问题和 ./0051-n-queens.ts 中一样，但只需要返回解的个数
 */

import { gen2DArray } from '../helper/util'

export class NQueens {
  backtrackSolution(n: number) {
    let result = 0
    // [
    //      0    1    2
    // 0  ['.', '.', '.'],
    // 1  ['.', '.', '.'],
    // 2  ['.', '.', '.']
    // ]

    // 放置某列的标志
    let colFlag: boolean[] = []
    // 斜对角线（右上） / 放置的标志
    let slashFlag: boolean[] = []
    // 反斜对角线（左上） \ 放置的标志
    let backslashFlag: boolean[] = []

    const loop = (row: number = 0) => {
      if (row === n) {
        result++
        return
      }
      for (let col = 0; col < n; col++) {
        // 对于同一条斜对角线，row + col 是相等的
        const slashIdx = row + col
        // 对于同一条反斜对角线，row - col 是相等的， +n 为了避免负数
        const backslashIdx = row - col + n

        if (
          colFlag[col] ||
          slashFlag[slashIdx] ||
          backslashFlag[backslashIdx]
        ) {
          continue
        }

        colFlag[col] = slashFlag[slashIdx] = backslashFlag[backslashIdx] = true
        // 放置下一行
        loop(row + 1)
        // backtrack
        colFlag[col] = slashFlag[slashIdx] = backslashFlag[backslashIdx] = false
      }
    }

    loop()

    return result
  }
}
