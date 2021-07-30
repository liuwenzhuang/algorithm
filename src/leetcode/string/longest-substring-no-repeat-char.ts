/**
 * @fileoverview
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

export function findLonestSubstringWithoutRepeatChar(str: string) {
  // 'abcdefa'
  const len = str.length
  let headCuror = 0
  let tailCuror = 0
  const charSet = new Set<string>()
  let subStr = ''
  while (headCuror <= tailCuror && tailCuror < len) {
    const char = str.charAt(tailCuror)
    if (!charSet.has(char)) {
      charSet.add(char)
      tailCuror++
    } else {
      if (subStr.length < tailCuror - headCuror) {
        subStr = str.slice(headCuror, tailCuror)
      }
      headCuror++
      tailCuror = headCuror
      charSet.clear()
    }
  }
  return subStr
}
