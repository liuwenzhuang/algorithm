/**
 * @fileoverview
 * 在两个序列中找到最长的公共子序列
 * 子序列和子串的区别在于子序列不要求在原始序列中占据连续的位置
 * 以 ABCD 和 ACBAD 为例：
 * AB AC AD BD CD - 长度为 2 的公共子序列
 * ABD ACD - 长度为 3 的公共子序列
 * https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
 */

import { gen2DArray } from '../helper/util'

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
 * 使用位操作的方式获取 str 所有的子序列
 * 长度为 len 的字符串，其所有子序列的个数为 2^len - 1 个
 * 每个数量用 2 进制表示的话，位置上是 1 的对应相应的字符
 * abc 2^3 - 1 = 7种
 * 1 -> 001 -> c
 * 2 -> 010 -> b
 * ...
 * 5 -> 101 -> ac
 * ...
 * 7 -> 111 -> abc
 * @param str
 */
export function getAllSubSequencesByBit(str: string) {
  const len = str.length
  const total = Math.pow(2, len) - 1
  if (total > Number.MAX_SAFE_INTEGER) {
    throw new Error('str is too long, not supported')
  }
  const result = new Set<string>()
  for (let i = 1; i <= total; i++) {
    let acc = ''
    for (let j = 0; j < len; j++) {
      if (i & (1 << j)) {
        // 判断子序列的数量序列的二进制表示在 str 对应的哪些位置上是 1
        acc += str.charAt(j)
      }
    }
    if (acc.length) {
      result.add(acc)
    }
  }

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

/**
 * 递归获取最长公共子序列的长度
 * str1 和 str2 的最后一个字符相同，结果： LCS(str1[0...len1-1], str2[0...len2-1]) + 1
 * 否则结果：LCS(str1, str2[0...len2-1]), LCS(str[0...len1-1], str2) 中的较大值
 */
export function recursiveFindLCSLength(str1: string, str2: string) {
  const len1 = str1.length
  const len2 = str2.length
  if (len1 === 0 || len2 === 0) {
    return 0
  }

  const lastChar1 = str1.charAt(len1 - 1)
  const lastChar2 = str2.charAt(len2 - 1)
  if (lastChar1 === lastChar2) {
    return (
      recursiveFindLCSLength(
        str1.substring(0, len1 - 1),
        str2.substring(0, len2 - 1)
      ) + 1
    )
  } else {
    return Math.max(
      recursiveFindLCSLength(str1, str2.substring(0, len2 - 1)),
      recursiveFindLCSLength(str1.substring(0, len1 - 1), str2)
    )
  }
}

/**
 * 动态规划获取最长公共子序列的长度
 * str1 和 str2 的最后一个字符相同，结果： LCS(str1[0...len1-1], str2[0...len2-1]) + 1
 * 否则结果：LCS(str1, str2[0...len2-1]), LCS(str[0...len1-1], str2) 中的较大值
 */
export function dpFindLCSLength(str1: string, str2: string) {
  const len1 = str1.length
  const len2 = str2.length
  // 'DATGB' <---> 'CAFJB'
  //   C A F J B
  // D
  // A
  // T
  // G
  // B

  const dp = gen2DArray(len1 + 1, len2 + 1, 0)
  // dp[row][col] = LCS(dp[0...row-1], dp[0...col-1])

  for (let row = 1; row <= len1; row++) {
    for (let col = 1; col <= len2; col++) {
      // dp 已经预填充 0，对于 row === 0 或 col === 0 的情况不必处理
      if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
        dp[row][col] = dp[row - 1][col - 1] + 1
      } else {
        dp[row][col] = Math.max(dp[row][col - 1], dp[row - 1][col])
      }
    }
  }

  return dp[len1][len2]
}

export function dpFindLCS(str1: string, str2: string) {
  const len1 = str1.length
  const len2 = str2.length
  // 'DATGB' <---> 'CAFJB'
  //   C A F J B
  // D 0 0 0 0 0 0
  // A 0 0 0 0 0 0
  // T 0 0 1 1 1 1
  // G 0 0 1 1 1 1
  // B 0 0 1 1 1 1
  //   0 0 1 1 1 2

  const dp = gen2DArray(len1 + 1, len2 + 1, 0)
  // dp[row][col] = LCS(dp[0...row-1], dp[0...col-1])

  for (let row = 1; row <= len1; row++) {
    for (let col = 1; col <= len2; col++) {
      // dp 已经预填充 0，对于 row === 0 或 col === 0 的情况不必处理
      if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
        dp[row][col] = dp[row - 1][col - 1] + 1
      } else {
        dp[row][col] = Math.max(dp[row][col - 1], dp[row - 1][col])
      }
    }
  }

  let acc = ''
  let row = len1
  let col = len2
  while (row > 0 && col > 0) {
    if (str1.charAt(row - 1) === str2.charAt(col - 1)) {
      acc = str1.charAt(row - 1) + acc
      row--
      col--
    } else if (dp[row][col - 1] > dp[row - 1][col]) {
      col--
    } else {
      row--
    }
  }

  return acc
}
