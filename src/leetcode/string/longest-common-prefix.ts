/**
 * @fileoverview
 * https://leetcode.com/problems/longest-common-prefix/
 * LCP(strs[0...n]) = LCP(LCP(strs[0...k-1]), LCP(strs[k...n]))
 * Divide and Conquer
 */

export function longestCommonPrefix(strs: string[]) {
  const len = strs.length
  if (len === 0) {
    return ''
  }
  if (len === 1) {
    return strs[0]
  }
  if (len === 2) {
    return getLcpOfTwoStrs(strs[0], strs[1])
  }
  const mid = Math.floor(len / 2)
  return getLcpOfTwoStrs(
    longestCommonPrefix(strs.slice(0, mid)),
    longestCommonPrefix(strs.slice(mid))
  )
}

function getLcpOfTwoStrs(str1: string, str2: string) {
  const minLen = Math.min(str1.length, str2.length)
  for (let i = 0; i < minLen; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      return str1.substring(0, i)
    }
  }
  return str1.substring(0, minLen)
}
