/**
 * @fileoverview
 * https://leetcode.com/problems/powx-n/
 * (x: number, n: number) => number
 * 计算 x^n，即 Math.pow(x, n)
 */

export class PowerxN {
  firstSolution(x: number, n: number) {
    let result = 1
    for (let i = 0; i < Math.abs(n); i++) {
      result *= x
    }
    if (n < 0) {
      return 1 / result
    }
    return result
  }

  recursiveSolution(x: number, n: number) {
    if (n === 0) {
      return 1
    }
    const pow = Math.abs(n)
    let result: number = null

    if (pow % 2 === 0) {
      // pow 是偶数
      // 2 ^ 4 = 2 * 2 * 2 * 2 = 4 ^ 2
      result = this.recursiveSolution(x * x, pow / 2)
    } else {
      // pow 是奇数
      // 2 ^ 3 = 2 * 2 * 2 = 4 ^ 1 * 2
      result = this.recursiveSolution(x * x, Math.floor(pow / 2)) * x
    }
    return n < 0 ? 1 / result : result
  }
}
