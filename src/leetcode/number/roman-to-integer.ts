/**
 * @fileoverview
 * https://leetcode.com/problems/roman-to-integer/
 * @see [integer-to-roman.ts](integer-to-roman.ts)
 */

/**
 * O(n^2)
 * @param roman
 * @returns
 */
export function romanToInteger(roman: string) {
  // III 3
  // IV 4
  // VI 6
  // IX 9
  const len = roman.length

  if (len < 1 || len > 15) {
    return null
  }

  const RomanNumMap = new Map<string, number>([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ])

  let result = 0
  let romanBackup = roman
  const keys = Array.from(RomanNumMap.keys())
  while (romanBackup) {
    keys.forEach((key) => {
      if (romanBackup.startsWith(key)) {
        result += RomanNumMap.get(key)
        romanBackup = romanBackup.slice(key.length)
      }
    })
  }
  return result
}

/**
 * O(n)
 * @param roman
 * @returns
 */
export function linearRomanToInteger(roman: string) {
  const RomanNumMap = new Map<string, number>([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
  ])
  let result = 0

  for (let i = 0, len = roman.length; i < len; i++) {
    const current = RomanNumMap.get(roman[i])
    if (i < len - 1) {
      const next = RomanNumMap.get(roman[i + 1])
      if (current < next) {
        // 减值前缀
        result += next - current
        // 跳过后一个
        i++
        continue
      }
    }
    result += current
  }

  return result
}
