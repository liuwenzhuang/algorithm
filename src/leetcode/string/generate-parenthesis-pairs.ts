/**
 * @fileoverview
 * https://leetcode.com/problems/generate-parentheses/
 */

export class GenerateParenthesisPairs {
  // TODO: optimize this solution
  /**
   * 生成指定数量的合法的成对括号
   * @param pairs 需要生成成对括号的数量
   */
  solution(pairs: number) {
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
}
