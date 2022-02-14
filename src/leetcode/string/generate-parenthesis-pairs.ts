/**
 * @fileoverview
 * https://leetcode.com/problems/generate-parentheses/
 */

export class GenerateParenthesisPairs {
  solution: (x: number) => string[]

  constructor() {
    this.solution = this.backtrackSolution
  }

  /**
   * 生成指定数量的合法的成对括号
   * @param pairs 需要生成成对括号的数量
   */
  firstSolution(pairs: number) {
    // 2 (()) ()()
    // 3 (()()) ((())) ()()() (())() ()(())
    if (pairs < 1) {
      return []
    }

    const result: Set<string> = new Set()

    const loop = (curStr: string = '()', num: number = 1) => {
      if (num === pairs) {
        result.add(curStr)
        return
      }
      const visitedStack: Array<'('> = []
      for (let i = 0, len = curStr.length; i < len; i++) {
        const char = curStr.charAt(i)
        if (char === '(') {
          visitedStack.push(char)
        }
        if (char === ')') {
          const lastChar = visitedStack.pop()
          if (lastChar === '(') {
            loop(curStr.substring(0, i) + '()' + curStr.substring(i), num + 1)
            loop(curStr + '()', num + 1)
          }
        }
      }
    }

    loop()
    return Array.from(result)
  }

  backtrackSolution(pairs: number) {
    const result: string[] = []

    const loop = (curStr = '', openCount = 0, closeCount = 0) => {
      if (curStr.length === pairs * 2) {
        result.push(curStr)
        return
      }

      if (openCount < pairs) {
        loop(curStr + '(', openCount + 1, closeCount)
      }

      if (closeCount < openCount) {
        loop(curStr + ')', openCount, closeCount + 1)
      }
    }

    loop()
    return result
  }
}
