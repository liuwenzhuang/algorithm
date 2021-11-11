/**
 * @fileoverview
 * https://leetcode.com/problems/integer-to-roman/
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 */

const I = 'I' // 1
const V = 'V' // 5
const X = 'X' // 10
const L = 'L' // 50
const C = 'C' // 100
const D = 'D' // 500
const M = 'M' // 1000

/**
 * 根据对应位上的数字得到当前的罗马符号表示
 * @param numChar
 * @param digit
 */
function roman(numChar: string, digit: 1 | 10 | 100 | 1000 = 1) {
  const num = Number(numChar)
  const isGreater5 = num >= 5
  const remainer = num % 5

  let prefixOrSuffix: string
  let mainLowPart: string
  let mainHighPart: string

  if (digit === 1) {
    // 个位 0-9
    prefixOrSuffix = I
    mainLowPart = V
    mainHighPart = X
  }
  if (digit === 10) {
    // 10 位 10-99
    prefixOrSuffix = X
    mainLowPart = L
    mainHighPart = C
  }
  if (digit === 100) {
    // 百位 100-999
    prefixOrSuffix = C
    mainLowPart = D
    mainHighPart = M
  }
  if (digit === 1000) {
    prefixOrSuffix = M
  }

  if (remainer === 4) {
    // num 是 4 或 9
    return prefixOrSuffix + (isGreater5 ? mainHighPart : mainLowPart)
  }
  // 100 C | 200 CC | 300 CCC | 500 D | 600 DC | 700 DCC | 400 CD | 900 CM
  if (isGreater5) {
    return mainLowPart + prefixOrSuffix.repeat(remainer)
  } else {
    return prefixOrSuffix.repeat(remainer)
  }
}

export function integerToRoman(num: number) {
  if (num < 1 || num > 3999) {
    return null
  }
  const numChars = num.toString().split('')
  let result = ''
  numChars.forEach((char, index) => {
    const flagOfIndex = roman(
      char,
      Math.pow(10, numChars.length - index - 1) as any
    )
    result += flagOfIndex
  })
  return result
}
