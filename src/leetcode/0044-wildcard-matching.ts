/**
 * @fileoverview
 * https://leetcode.com/problems/wildcard-matching/
 * (str: string, pattern: string) => boolean
 * pattern 中 * 表示任意长的任意序列，? 表示任一字符
 * 全量匹配
 */

import { gen2DArray } from '../helper/util'

export class WildcardMatching {
  firstSolution(str: string, pattern: string) {
    if (str.length !== pattern.length && !pattern.includes('*')) {
      return false
    }
    let strLen = str.length
    let patternLen = pattern.length
    let strCursor = 0
    let patternCursor = 0

    let star: number = null
    let match = 0
    while (strCursor < strLen) {
      const strChar = str.charAt(strCursor)
      const patternChar = pattern.charAt(patternCursor)
      if (patternChar === '?' || strChar === patternChar) {
        strCursor++
        patternCursor++
        continue
      }
      if (patternChar === '*') {
        star = patternCursor
        match = strCursor
        patternCursor++
        continue
      }
      if (star !== null) {
        // abcd  // a*d
        // 当前 patternCurosr 前一个是 *，当前不是
        patternCursor = star + 1
        match++
        strCursor = match
        continue
      }
      return false
    }

    while (
      patternCursor < patternLen &&
      pattern.charAt(patternCursor) === '*'
    ) {
      patternCursor++
    }

    return patternCursor === patternLen
  }

  dpSolution(str: string, pattern: string) {
    const strLen = str.length
    const patternLen = pattern.length

    // dp[iStr][jPattern] 表示前 iStr 个的 subStr 和 前 jPattern 个的 subPattern 是否匹配
    const dp: boolean[][] = gen2DArray(strLen + 1, patternLen + 1, false)
    dp[0][0] = true //

    for (let i = 1; i <= strLen; i++) {
      // 没有 pattern，肯定为 false
      dp[i][0] = false
    }

    for (let j = 1; j <= patternLen; j++) {
      // 没有 str，只有当 j 为 * 时为 true
      // '' *ab
      if (pattern.charAt(j - 1) === '*') {
        dp[0][j] = dp[0][j - 1]
      }
    }

    for (let i = 1; i <= strLen; i++) {
      for (let j = 1; j <= patternLen; j++) {
        if (
          (str.charAt(i - 1) === pattern.charAt(j - 1) ||
            pattern.charAt(j - 1) === '?') &&
          dp[i - 1][j - 1]
        ) {
          // 对应位置字符相等 或 patterCursor 位置为 ?，此时还需判断它们前一个位置是否匹配
          dp[i][j] = true
        } else if (
          // patternCursor 前一个位置是 *，
          // dp[i - 1][j] 为 true 表示 * 匹配任意序列，如 abcd 和 ab*
          // dp[i][j - 1] 为 true 表示 * 匹配空，如 ab 和 ab*
          pattern.charAt(j - 1) === '*' &&
          (dp[i - 1][j] || dp[i][j - 1])
        ) {
          dp[i][j] = true
        }
      }
    }

    return dp[strLen][patternLen]
  }
}
