/**
 * @fileoverview
 * https://leetcode.com/problems/count-and-say/
 */

export class CountAndSay {
  firstSolution(n: number) {
    if (n === 1) {
      return '1'
    }
    const prevResult = this.firstSolution(n - 1)
    // n 的结果是由 n-1 的结果数对应的值得到的
    let result = ''
    for (let i = 0, len = prevResult.length; i < len; i++) {
      let curChar = prevResult[i]
      let curCharCount = 1
      let j = i
      while (prevResult[j + 1] === prevResult[j]) {
        curCharCount++
        j++
      }
      i = j
      result += `${curCharCount}${curChar}`
    }

    return result
  }
}
