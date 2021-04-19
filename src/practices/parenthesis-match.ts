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
