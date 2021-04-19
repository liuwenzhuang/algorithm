import { Stack } from '../stack/stack'

/**
 * 给定括号的位置，找到与其相匹配括号的位置
 */
export class ParenthesisMatch {
  // 'some (one kkdkkd kk (ABC) kjj)kkk'

  private bracketMap = {
    '(': ')',
    ')': '(',
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
  } as const

  private openBrackets = new Set(['(', '[', '{'])

  private closeBrackets = new Set([')', ']', '}'])

  constructor(public sentence: string) {
    this.sentence = sentence
  }

  checkMatch() {
    const visitedStack = new Stack()
    for (let i = 0, len = this.sentence.length; i < len; i++) {
      const charAtIndex = this.sentence[i]
      if (this.openBrackets.has(charAtIndex)) {
        visitedStack.push(charAtIndex)
      }

      if (this.closeBrackets.has(charAtIndex)) {
        if (visitedStack.size < 1) {
          // 没有对应的开启括号
          return false
        }
        const peekItem = visitedStack.pop()
        if (peekItem !== this.bracketMap[charAtIndex]) {
          // 最近的开启括号，和关闭括号不匹配
          return false
        }
      }
    }

    // 如果都匹配，最后栈应该是空的
    return visitedStack.size === 0
  }

  findMatchIndex(pos: number) {
    const charAtPos = this.sentence[pos]
    if (
      !this.openBrackets.has(charAtPos) &&
      !this.closeBrackets.has(charAtPos)
    ) {
      return null
    }

    if (this.closeBrackets.has(charAtPos)) {
      // ), ], } 向前查找 (, [, {
      let result = -1
      for (let i = pos - 1; i >= 0; i--) {
        const charAtIndex = this.sentence[i]
        if (charAtIndex === this.bracketMap[charAtPos]) {
          result += 1
        }
        if (charAtIndex === charAtPos) {
          result -= 1
        }
        if (result === 0) {
          return i
        }
      }
    }

    if (this.openBrackets.has(charAtPos)) {
      // (, [, { 向后查找 ), ], }
      let result = -1
      for (let i = pos + 1; i < this.sentence.length; i++) {
        const charAtIndex = this.sentence[i]
        if (charAtIndex === charAtPos) {
          result -= 1
        }
        if (charAtIndex === this.bracketMap[charAtPos]) {
          result += 1
        }
        if (result === 0) {
          return i
        }
      }
    }

    return null
  }
}
