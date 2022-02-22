/**
 * @fileoverview
 * https://leetcode.com/problems/valid-sudoku/
 * 9*9 二维数组：
 * 1. 每一行中的数字在 1-9 之间，且互相不同
 * 2. 每一列中的数字在 1-9 之间，且互相不同
 * 3. 每一个 3*3 的部分，数字在 1-9 之间，且互相不同
 */

export class ValidSudoku {
  /**
   * https://leetcode.com/problems/valid-sudoku/discuss/476369/Javascript-Solution-(beats-100)-with-explanation-(real-explanations)
   * @param sudoku
   * @returns
   */
  firstSolution(sudoku: string[][]) {
    const rowSet = new Set()
    const colSet = new Set()
    // 00 01 02 | 03 04 05 | 06 07 08
    // 10 11 12 | 13 14 15 | 16 17 18  => i:0-2 j:0-2 3-5 6-8
    // 20 21 22 | 23 24 25 | 26 27 28
    //
    // 30 31 32 | 33 34 35 | 36 37 38  => i:3-5 j:0-2 3-5 6-8
    // ...
    // 60 61 62 | 63 64 65 | 66 67 68  => i:6-8 j:0-2 3-5 6-8
    // i / 3 + i % 3
    const subSquareSet = new Set()

    for (let i = 0; i < 9; i++) {
      rowSet.clear()
      colSet.clear()
      subSquareSet.clear()
      for (let j = 0; j < 9; j++) {
        // [i][j] => 按行
        if (sudoku[i][j] !== '.') {
          if (rowSet.has(sudoku[i][j])) {
            return false
          } else {
            rowSet.add(sudoku[i][j])
          }
        }

        // [j][i] => 按列
        if (sudoku[j][i] !== '.') {
          if (colSet.has(sudoku[j][i])) {
            return false
          } else {
            colSet.add(sudoku[j][i])
          }
        }

        const subSquareValue =
          sudoku[3 * Math.floor(i / 3) + Math.floor(j / 3)][
            3 * (i % 3) + (j % 3)
          ]
        if (subSquareValue !== '.') {
          if (subSquareSet.has(subSquareValue)) {
            return false
          } else {
            subSquareSet.add(subSquareValue)
          }
        }
      }
    }

    return true
  }
}
