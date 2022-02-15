/**
 * @fileoverview
 * https://leetcode.com/problems/divide-two-integers/
 * 不能使用除法、乘法、mod运算，且结果舍弃小数
 */

export class DivideTwoIntegers {
  firstSolution(dividend: number, divisor: number) {
    if (divisor === 0) {
      return null
    }
    const dividendAbs = Math.abs(dividend)
    const divisorAbs = Math.abs(divisor)
    if ((dividend >= 0 && divisor >= 0) || (dividend <= 0 && divisor <= 0)) {
    }
    let total = divisorAbs
    let n = 1
    while (total < dividendAbs) {
      total += divisorAbs
      n++
    }
    const sameSign =
      (dividend >= 0 && divisor >= 0) || (dividend <= 0 && divisor <= 0)

    n -= 1
    return sameSign ? n : -n
  }
}
