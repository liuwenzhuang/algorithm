/**
 * @fileoverview
 * https://leetcode.com/problems/regular-expression-matching/
 */

import { gen2DArray } from '../../helper/util'

/**
 * 递归
 * @param str
 * @param regexp
 * @returns
 */
export function recursiveRegularExpressionMatch(str: string, regexp: string) {
  const strLen = str.length
  const regexpLen = regexp.length

  if (regexpLen === 0) {
    return strLen === 0
  }

  // 第一个字符是否匹配，字符相同或者正则字符串遇到“.”
  const firstMatch =
    strLen > 0 &&
    (str.charAt(0) === regexp.charAt(0) || regexp.charAt(0) === '.')

  if (regexpLen > 1 && regexp.charAt(1) === '*') {
    // aab 和 a*b
    // ab 和 .*
    return (
      recursiveRegularExpressionMatch(str, regexp.slice(2)) ||
      (firstMatch && recursiveRegularExpressionMatch(str.slice(1), regexp))
    )
  }

  return (
    firstMatch && recursiveRegularExpressionMatch(str.slice(1), regexp.slice(1))
  )
}

/**
 * 动态规划解决
 * TODO: 有些搞不明白，后续要深入了解一下
 * @param str
 * @param regexp
 * @returns
 */
export function dpRegularExpressionMatch(str: string, regexp: string) {
  const strLen = str.length
  const regexpLen = regexp.length
  const dp = gen2DArray(strLen + 1, regexpLen + 1, false)
  dp[strLen][regexpLen] = true

  for (let row = strLen; row >= 0; row--) {
    for (let col = regexpLen - 1; col >= 0; col--) {
      const firstMatch =
        row < strLen &&
        (regexp.charAt(col) === str.charAt(row) || regexp.charAt(col) === '.')
      if (col + 1 < regexpLen && regexp.charAt(col + 1) === '*') {
        dp[row][col] = dp[row][col + 2] || (firstMatch && dp[row + 1][col])
      } else {
        dp[row][col] = firstMatch && dp[row + 1][col + 1]
      }
    }
  }

  return dp[0][0]
}
