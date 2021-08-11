/**
 * @fileoverview
 * https://leetcode.com/problems/zigzag-conversion/
 */

import { gen2DArray } from '../../helper/util'

export function zigzagConversion(str: string, rowCount: number) {
  const strLen = str.length
  if (strLen <= rowCount || rowCount === 1) {
    return str
  }

  const arr = gen2DArray(rowCount, 2 * rowCount, '')

  // 从 str 中取值的下标
  let strIndex = 0

  // 每隔多少列，列被完全填充
  const step = rowCount - 1

  // 完全填充列的下标
  let colCursor = 0

  // 填充单个字符列对应的行下标，从 [rowCount - 2 ... 1]
  let rowCursor = rowCount - 2

  for (let col = 0; col < Number.MAX_SAFE_INTEGER; col++) {
    for (let row = 0; row < rowCount; row++) {
      if (strIndex > strLen) {
        break
      }
      if (col === colCursor) {
        arr[row][col] = str.charAt(strIndex++)
        rowCursor = rowCount - 2
      } else if (rowCursor !== 0) {
        arr[rowCursor--][col] = str.charAt(strIndex++)
        if (rowCursor === 0) {
          colCursor += step
        }
        break
      }
    }
    if (strIndex > strLen) {
      break
    }
  }

  let resultStr = ''
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] !== '') {
        resultStr += arr[row][col]
      }
    }
  }

  return resultStr
}
