/**
 * @fileoverview
 * https://leetcode.com/problems/string-to-integer-atoi/
 */

export function stringToInteger(str: string) {
  const minLimit = -Math.pow(2, 31)
  const maxLimit = Math.pow(2, 31) - 1
  let resultStr = ''
  let prevChar = ' '
  for (let i = 0, len = str.length; i < len; i++) {
    const char = str.charAt(i)
    const isPrevCharValid = /[-+\d ]/.test(prevChar)
    // resultStr 结尾已经包含了数字，如果后面遇到非数字，即停止
    if (!isPrevCharValid || (/\d$/.test(resultStr) && /[^\d]$/.test(prevChar))) {
      break
    } else {
      if (/^[-+\d]$/.test(char)) {
        resultStr += char
      }
    }
    prevChar = char
  }

  let resultNum = parseInt(resultStr, 10)
  if (resultNum < minLimit) {
    return minLimit
  }
  if (resultNum > maxLimit) {
    return maxLimit
  }

  return resultNum
}
