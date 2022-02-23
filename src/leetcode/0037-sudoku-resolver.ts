/**
 * @fileoverview https://leetcode.com/problems/sudoku-solver/
 * @see ./0036-valid-sudoku.ts
 */

export class SudokuResolver {
  firstSolution(sudoku: string[][]) {
    const resolver = () => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (sudoku[i][j] !== '.') {
            continue
          }
          for (let k = 1; k <= 9; k++) {
            if (this.isValid(sudoku, i, j, k.toString())) {
              sudoku[i][j] = k.toString()
              if (resolver()) {
                // 符合数独
                return true
              } else {
                // 不符合数独，回退
                sudoku[i][j] = '.'
              }
            }
          }

          return false
        }
      }
      return true
    }
    resolver()
    return sudoku
  }

  private isValid(sudoku: string[][], row: number, col: number, char: string) {
    for (let i = 0; i < 9; i++) {
      // row: 0-8  col: 0-8  i: 0-8
      // row=8 col=8
      // [6 + 0-2][6 + 0-2]
      // 行、列、3*3 中存在 char，即为非法
      if (
        sudoku[row][i] === char ||
        sudoku[i][col] === char ||
        sudoku[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(col / 3) + (i % 3)
        ] === char
      ) {
        return false
      }
    }
    return true
  }
}
