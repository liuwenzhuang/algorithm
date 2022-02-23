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
    // for 中不需要 i++，在 do...while 中已经 ++ 了
    for (let i = 0, len = prevResult.length; i < len; ) {
      let curChar = prevResult[i]
      let curCharCount = 0
      do {
        curCharCount++
      } while (prevResult[i] === prevResult[++i])

      result += `${curCharCount}${curChar}`
    }

    return result
  }
}
