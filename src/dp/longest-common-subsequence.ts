/**
 * @fileoverview
 * 在两个序列中找到最长的公共子序列
 * 子序列和子串的区别在于子序列不要求在原始序列中占据连续的位置
 * 以 ABCD 和 ACBAD 为例：
 * AB AC AD BD CD - 长度为 2 的公共子序列
 * ABD ACD - 长度为 3 的公共子序列
 * https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
 */

export function bruteForceLongestCommonSubsequence(str1: string, str2: string) {
  // brute force
  // 在较小长度的序列中找出所有的子序列，依次到较大长度的序列中匹配
  const len1 = str1.length
  const len2 = str2.length

  if (len1 > len2) {
    return bruteForceLongestCommonSubsequence(str2, str1)
  }

  let maxLenSubSeq = ''
  const allSubSequences = getAllSubSequences(str1)
  allSubSequences.forEach((item) => {
    if (checkSubSeqIn(item, str2) && item.length > maxLenSubSeq.length) {
      maxLenSubSeq = item
    }
  })
  return maxLenSubSeq
}

/**
 * 获取 str 所有的子序列
 * @param str
 */
export function getAllSubSequences(str: string) {
  // ABC
  const result = new Set<string>()
  const len = str.length

  function solve(index = -1, acc = '') {
    if (index === len) {
      return
    }

    if (acc.length > 0) {
      result.add(acc)
    }

    for (let i = index + 1; i < len; i++) {
      acc += str.charAt(i)
      solve(i, acc)
      acc = acc.substring(0, acc.length - 1)
    }
  }

  solve()
  return Array.from(result)
}

/**
 * 检查 subSeq 是否是 str 的子序列
 * @param subSeq
 * @param str
 * @returns
 */
export function checkSubSeqIn(subSeq: string, str: string) {
  // AC ABACD
  let index = -1
  for (let i = 0; i < subSeq.length; i++) {
    const char = subSeq.charAt(i)
    const indexInStr = str.indexOf(char, index)
    if (indexInStr === -1 || indexInStr < index) {
      return false
    }
    index = indexInStr
  }
  return true
}
