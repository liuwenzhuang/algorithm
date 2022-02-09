/**
 * @fileoverview
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * 2 - a b c
 * 3 - d e f
 * 4 - g h i
 * 5 - j k l
 * 6 - m n o
 * 7 - p q r s
 * 8 - t u v
 * 9 - w x y z
 *
 * '2' -> ['a', 'b', 'c']
 * '23' -> ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
 * '234' -> ['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', ..., 'cdg', ...]
 */

export class PhoneNumbersLettersMapping {
  private numberLettersMap = new Map<string, string[]>([
    ['1', []],
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ])

  recurive(numStr: string) {
    if (numStr.length === 0) {
      return []
    }
    if (numStr.length === 1) {
      return this.numberLettersMap.get(numStr.charAt(0))
    }

    const result: string[] = []
    const loop = (prefix = '', index = 0) => {
      if (index === numStr.length) {
        // 同一个前缀
        result.push(prefix)
        return
      }

      const curChar = numStr.charAt(index)
      const curLetters = this.numberLettersMap.get(curChar)

      curLetters.forEach((letter) => {
        loop(prefix + letter, index + 1)
      })
    }

    loop()
    return result
  }

  bruteForce(numStr: string) {
    const numStrArr = numStr.split('')
    if (numStrArr.length === 1) {
      return this.numberLettersMap.get(numStrArr[0])
    }
    let result: string[] = []
    numStrArr.forEach((numChar) => {
      const curCharLetters = this.numberLettersMap.get(numChar)

      if (result.length === 0) {
        result = curCharLetters
        return
      }

      result = this.combineLettersArrs(result, curCharLetters)
    })

    return result
  }

  private combineLettersArrs(arr1: string[], arr2: string[]) {
    const result = []
    arr1.forEach((char1) => {
      arr2.forEach((char2) => {
        result.push(`${char1}${char2}`)
      })
    })
    return result
  }
}
