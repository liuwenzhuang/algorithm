/**
 * @fileoverview
 * https://leetcode.com/problems/3sum/
 * arr[i] + arr[j] + arr[k] = 0
 * i !== j && i !== k && j !== k
 */

/**
 * 使用有序数组的方式进行处理
 * @param arr
 * @returns
 */
function sum3ToZeroBySortedArr(arr: number[]) {
  if (arr.length < 3) {
    return []
  }
  // 数组排序
  const sortedArr = arr.concat().sort((a, b) => a - b)
  // pick3(arr) -> sum -> 0
  // pick2(arr) -> 0 - pick1(arr)
  const result: number[][] = []
  for (
    let pick1Index = 0, len = sortedArr.length;
    pick1Index < len - 2;
    pick1Index++
  ) {
    const pick1Value = sortedArr[pick1Index]
    if (pick1Index > 0 && sortedArr[pick1Index - 1] === pick1Value) {
      // 相同的 pick1Value 已经处理过
      continue
    }
    // left cursor
    let pick2Index = pick1Index + 1
    // right cursor
    let pick3Index = len - 1
    while (pick2Index < pick3Index) {
      const pick2Value = sortedArr[pick2Index]
      const pick3Value = sortedArr[pick3Index]
      const sum = pick1Value + pick2Value + pick3Value
      if (sum === 0) {
        result.push([pick1Value, pick2Value, pick3Value])
        while (
          pick2Index < pick3Index &&
          sortedArr[pick2Index + 1] === sortedArr[pick2Index]
        ) {
          pick2Index++
        }
        pick3Index--
        while (
          pick2Index < pick3Index &&
          sortedArr[pick3Index] === sortedArr[pick3Index + 1]
        ) {
          pick3Index--
        }
      }
      if (sum < 0) {
        // 结果 < 0，表示需要增大加数，向右移动 pick2Index，增加 pick2Value
        pick2Index++
      }
      if (sum > 0) {
        // 结果 > 0，表示需要减小加数，向左移动 pick3Index，减小 pick3Value
        pick3Index--
      }
    }
  }
  return result
}

export const sum3ToZero = sum3ToZeroBySortedArr
