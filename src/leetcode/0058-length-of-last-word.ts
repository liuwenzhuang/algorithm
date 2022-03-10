/**
 * @fileoverview
 * https://leetcode.com/problems/length-of-last-word/
 */

export class LengthOfLastWord {
  firstSolution(str: string) {
    const result = /\s*(\w+)\s*$/g.exec(str)
    if (result) {
      return result[1].length
    }
    return 0
  }
}
