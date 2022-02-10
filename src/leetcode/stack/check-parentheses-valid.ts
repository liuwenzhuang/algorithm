/**
 * @fileoverview
 * https://leetcode.com/problems/valid-parentheses/
 */

export class CheckParenthesesValid {
  private parenMap = new Map([
    ['(', ')'],
    [')', '('],
    ['[', ']'],
    [']', '['],
    ['{', '}'],
    ['}', '{'],
  ])

  private openParens = new Set(['(', '[', '{'])
  private closeParens = new Set([')', ']', '}'])

  solution(parensStr: string) {
    // []{}()  [{({})}]
    const visitedStack: string[] = []
    for (let i = 0, len = parensStr.length; i < len; i++) {
      const parenChar = parensStr.charAt(i)

      if (this.openParens.has(parenChar)) {
        visitedStack.push(parenChar)
      }

      if (this.closeParens.has(parenChar)) {
        if (visitedStack.length < 1) {
          // 没有左括号，但有了右括号
          return false
        }

        const lastChar = visitedStack.pop()
        if (lastChar !== this.parenMap.get(parenChar)) {
          // 最后一个左括号和右括号不匹配
          return false
        }
      }
    }

    // 如果匹配，入栈数量应和出栈数量一致
    return visitedStack.length === 0
  }
}
