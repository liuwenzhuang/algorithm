/**
 * @fileoverview
 * https://leetcode.com/problems/reverse-integer/
 */

export function reverseSignedNumber(num: number) {
  if (num === 0 || num > Math.pow(2, 31) - 1 || num < -Math.pow(2, 31)) {
    // 0 和 -0
    return 0
  }

  const numStr = num.toString()
  const firstChar = numStr.charAt(0)
  const resultStr =
    firstChar === '-'
      ? numStr.charAt(0) + numStr.slice(1).split('').reverse().join('')
      : numStr.split('').reverse().join('')
  return parseInt(resultStr, 10)
}
