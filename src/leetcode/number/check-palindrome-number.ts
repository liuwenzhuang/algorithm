/**
 * @fileoverview
 * https://leetcode.com/problems/palindrome-number/solution/
 */

/**
 * 不将 num 转换为 string，校验是否为回文数字
 * @param num
 */
export function checkPalindromeNumber(num: number) {
  if (num < 0) {
    // 负数包含“-”符号，肯定不是回文
    return false
  }

  let backupNum = num
  let revertedNum = 0
  while (backupNum !== 0) {
    revertedNum = revertedNum * 10 + (backupNum % 10)
    backupNum = Math.floor(backupNum / 10)
  }

  return revertedNum === num
}
