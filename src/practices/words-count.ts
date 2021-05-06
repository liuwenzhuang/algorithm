function isLetter(char: string) {
  return (
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) !== -1
  )
}

/**
 * 首字母大写
 * @param word
 * @returns
 */
function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export class WordsCount {
  wordsCountMap = new Map<string, number>()

  constructor(public str: string) {
    this.str = str
  }

  /**
   * 计算 word 对应的数量
   */
  populateWordsToCounts() {
    const len = this.str.length

    // Iterates over each character in the input string, splitting
    // words and passing them to this.addWordToMap()

    let currentWordStartIndex = 0
    let currentWordLength = 0

    for (let i = 0; i < len; i++) {
      const character = this.str.charAt(i)

      // If we reached the end of the string we check if the last
      // character is a letter and add the last word to our map
      if (i === len - 1) {
        if (isLetter(character)) {
          currentWordLength += 1
        }
        if (currentWordLength > 0) {
          const word = this.str.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength
          )
          this.addWordToMap(word)
        }

        // If we reach a space or emdash we know we're at the end of a word
        // so we add it to our map and reset our current word
      } else if (character === ' ' || character === '\u2014') {
        if (currentWordLength > 0) {
          const word = this.str.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength
          )
          this.addWordToMap(word)
          currentWordLength = 0
        }

        // We want to make sure we split on ellipses so if we get two periods in
        // a row we add the current word to our map and reset our current word
      } else if (character === '.') {
        if (i < this.str.length - 1 && this.str.charAt(i + 1) === '.') {
          if (currentWordLength > 0) {
            const word = this.str.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength
            )
            this.addWordToMap(word)
            currentWordLength = 0
          }
        }

        // If the character is a letter or an apostrophe, we add it to our current word
      } else if (isLetter(character) || character === "'") {
        if (currentWordLength === 0) {
          currentWordStartIndex = i
        }
        currentWordLength += 1

        // If the character is a hyphen, we want to check if it's surrounded by letters
        // if it is, we add it to our current word
      } else if (character === '-') {
        if (
          i > 0 &&
          isLetter(this.str.charAt(i - 1)) &&
          isLetter(this.str.charAt(i + 1))
        ) {
          currentWordLength += 1
        } else {
          if (currentWordLength > 0) {
            const word = this.str.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength
            )
            this.addWordToMap(word)
            currentWordLength = 0
          }
        }
      }
    }
  }

  /**
   * 只保存 小写版本 和 字母全是大写的版本
   * abc -> abc
   * Abc -> abc
   * ABC -> ABC
   * @param word
   */
  addWordToMap(word: string) {
    let newCount: number

    if (this.wordsCountMap.has(word)) {
      // 在 map 中，增加数量
      newCount = this.wordsCountMap.get(word) + 1
      this.wordsCountMap.set(word, newCount)
    } else if (this.wordsCountMap.has(word.toLowerCase())) {
      // 对应的小写版本已经存在于 map 中，故 word 一定是含有大写字母
      // If a lowercase version is in the map, we know our input word must be uppercase
      // but we only include uppercase words if they're always uppercase
      // so we just increment the lowercase version's count
      newCount = this.wordsCountMap.get(word.toLowerCase()) + 1
      this.wordsCountMap.set(word.toLowerCase(), newCount)
    } else if (this.wordsCountMap.has(capitalize(word))) {
      // 对应的首字母大写版本已经存在于 map 中，故 word 一定是首字母小写的，
      // 将大写字母版本转换为小写字母版本，继承其数量
      // If an uppercase version is in the map, we know our input word must be lowercase.
      // since we only include uppercase words if they're always uppercase, we add the
      // lowercase version and give it the uppercase version's count
      newCount = this.wordsCountMap.get(capitalize(word)) + 1
      this.wordsCountMap.set(word, newCount)
      this.wordsCountMap.delete(capitalize(word))
    } else {
      // 小写版本 或 大写版本均不存在，直接设置值
      this.wordsCountMap.set(word, 1)
    }
  }
}
