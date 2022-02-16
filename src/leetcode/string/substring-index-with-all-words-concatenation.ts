/**
 * @fileoverview
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 * (str: string, words: string[]) => number[]
 * words 中所有字符串的任意顺序拼接组合作为 str 子串的 index 集合
 */

export class SubstringIndexWithAllWordsConcatenation {
  /**
   * 找出所有 words 的组合，然后在 str 中查找对应的 index
   * @param str
   * @param words
   * @returns
   */
  firstSolution(str: string, words: string[]) {
    const indexs: number[] = []
    this.getAllConcatenation(words).forEach((concatenation) => {
      const concatenationStr = concatenation.join('')
      const index = str.indexOf(concatenationStr)
      if (index !== -1) {
        indexs.push(index)
      }
    })
    return indexs.sort((a, b) => a - b)
  }

  /**
   * 返回 strs 对应的所有顺序排列的组合
   * 对递归来说，先确定方法的定义，然后确定边界条件，然后在边界条件上的基础上增加实现
   * @param strs
   * @returns
   */
  getAllConcatenation(strs: string[]) {
    const len = strs.length
    if (len < 2) {
      return new Set([strs])
    }
    // Set[a]
    const allConcatenationExceptLast = this.getAllConcatenation(
      strs.slice(0, len - 1)
    )
    const lastStr = strs[len - 1]
    const result = new Set<string[]>()
    allConcatenationExceptLast.forEach((concatenation) => {
      // [a] -> [b, a] [a, b]
      const back = concatenation.concat()
      for (let i = 0, len = concatenation.length; i <= len; i++) {
        result.add([...back.slice(0, i), lastStr, ...back.slice(i)])
      }
    })
    return result
  }

  /**
   * 针对所有长度相同的 words 进行处理
   * @param str 父串
   * @param words 其中所有的字符串，拥有相同的长度
   */
  checkIndexSolutionForSameLengthWords(str: string, words: string[]) {
    const wordsLen = words.length
    if (wordsLen < 1) {
      return []
    }
    // 在 str 中一次检查子串的长度
    const wordLen = words[0].length
    const wordCountMap: Record<string, number> = {}
    words.forEach((word) => {
      const count = wordCountMap[word] ?? 0
      wordCountMap[word] = count + 1
    })

    const checkSubString = (str: string) => {
      if (str.length < wordLen * wordsLen) {
        return false
      }

      const wordCountMapBak = { ...wordCountMap }
      let wordsUsed = 0
      for (let i = 0, len = str.length; i < len; i += wordLen) {
        const sub = str.substring(i, i + wordLen)
        if ((wordCountMapBak[sub] ?? 0) !== 0) {
          wordCountMapBak[sub] -= 1
          wordsUsed++
        } else {
          // 存在于 words 中的 sub 被用完，或者 sub 不存在于 words
          break
        }
      }

      return wordsUsed === wordsLen
    }

    const indexs: number[] = []
    for (let i = 0, len = str.length; i < len; i += wordLen) {
      if (checkSubString(str.slice(i))) {
        indexs.push(i)
      }
    }

    return indexs
  }
}
