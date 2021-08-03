export function findLongestPalindromicSubstring(str: string) {
  const len = str.length
  let result = ''
  // TODO: optimize brute force
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
