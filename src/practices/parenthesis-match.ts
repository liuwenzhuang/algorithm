/**
 * 给定括号的位置，找到与其相匹配括号的位置
 */
export class ParenthesisMatch {
  // 'some (one kkdkkd kk (ABC) kjj)kkk'
  constructor(public sentence: string) {
    this.sentence = sentence
  }

  match(pos: number) {
    const charAtPos = this.sentence[pos]
    if (!/^[)(]$/.test(charAtPos)) {
      return null
    }

    if (charAtPos === ')') {
      // 向前查找
      let result = -1
      for (let i = pos - 1; i >= 0; i--) {
        const charAtIndex = this.sentence[i]
        if (charAtIndex === '(') {
          result += 1
        }
        if (charAtIndex === ')') {
          result -= 1
        }
        if (result === 0) {
          return i
        }
      }
    }

    if (charAtPos === '(') {
      // 向后查找
      let result = -1
      for (let i = pos + 1; i < this.sentence.length; i++) {
        const charAtIndex = this.sentence[i]
        if (charAtIndex === '(') {
          result -= 1
        }
        if (charAtIndex === ')') {
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
