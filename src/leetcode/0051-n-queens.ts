/**
 * @fileoverview
 * https://leetcode.com/problems/n-queens/
 * (n: number) => string[][]
 * n * n 棋盘，放置 n 个皇后棋子，返回它们不会相互攻击的所有解
 */

import { gen2DArray } from '../helper/util'

export class NQueens {
  firstSolution(n: number) {
    const result: string[][] = []
    const board = gen2DArray(n, n, '.')

    /**
     * 按行放置
     * @param settledRow
     * @returns
     */
    const loop = (settledRow = 0) => {
      if (settledRow === n) {
        // n 行放置完成
        result.push(board.map((row) => row.join('')))
        return
      }
      for (let col = 0; col < n; col++) {
        if (this.checkValid(board, settledRow, col, n)) {
          board[settledRow][col] = 'Q'
          // 放置下一行
          loop(settledRow + 1)
          // backtrack
          board[settledRow][col] = '.'
        }
      }
    }

    loop()
    return result
  }

  /**
   * for {@link NQueens.firstSolution}
   * 校验是否能够在 board[row][col] 中放置 Q，
   * 因为 row 后面的行未进行放置，所以对 row 后面的行不会进行校验
   * 又因为是按行放置的，所以不必校验同一行是否含有 Q
   * @param board
   * @param row
   * @param col
   * @param n
   * @returns
   */
  checkValid(board: string[][], row: number, col: number, n: number) {
    // 一行只有一个 Q，一列只有一个 Q，对角线上只有一个 Q（斜下和斜上都没有 Q）
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false
      }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      // 左斜上
      if (board[i][j] === 'Q') {
        return false
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      // 右斜上
      if (board[i][j] === 'Q') {
        return false
      }
    }

    return true
  }
}
