import { gen2DArray } from '../../helper/util'

export function findLongestPalindromicSubstring(str: string) {
  const len = str.length
  let result = ''
  // TODO: optimize brute force, view dpFindLongestPalindromicSubstring below
  for (let i = 0; i < len; i++) {
    for (let j = i; j <= len; j++) {
      const subStr = str.substring(i, j)
      if (subStr.length > result.length && checkIsPanlidromic(subStr)) {
        result = subStr
      }
    }
  }
  return result
}

/**
 * 是否为回文字符串
 * @param str
 * @returns
 */
export function checkIsPanlidromic(str: string) {
  const len = str.length
  const mid = Math.floor(len / 2)
  for (let i = 0; i < mid; i++) {
    if (str.charAt(i) !== str.charAt(len - i - 1)) {
      return false
    }
  }
  return true
}

/**
 * 使用动态规划实现
 * @param str
 * @returns
 */
export function dpFindLongestPalindromicSubstring(str: string) {
  const len = str.length
  if (len < 1) {
    return ''
  }
  if (len === 1) {
    return str
  }

  // abdba
  // dp:
  // [
  //   [1, 0, 0, 0, 0],
  //   [0, 1, 0, 0, 0],
  //   [0, 0, 1, 0, 0],
  //   [0, 0, 0, 1, 0],
  //   [0, 0, 0, 0, 1],
  // ]
  // 每一个表示存储 colIndex->rowIndex 是否为回文，对角线表示自己到自己，肯定为回文
  // colIndex -> rowIndex 的条件是，两处位置相等 && （两者相邻 或 它们中间为回文(即 rowIndex + 1 -> colIndex -1 为回文)）

  const dp = gen2DArray(len, len, false)
  let start = 0
  let maxLen = 1

  for (let row = 0; row < len; row++) {
    dp[row][row] = true
    for (let col = 0; col < row; col++) {
      // aba
      // row = 1 <---> col = 0
      // row = 2 <---> col = 0 两者相等，虽不相邻，但中间为回文
      // row = 2 <---> col = 1 不相等
      // aa 相邻的相等，或者
      dp[col][row] =
        str.charAt(row) === str.charAt(col) && (row - col < 2 || dp[col + 1][row - 1])
      if (dp[col][row] && maxLen < row - col + 1) {
        maxLen = row - col + 1
        start = col
      }
    }
  }

  return str.substr(start, maxLen)
}
