/**
 * @fileoverview
 * https://leetcode.com/problems/3sum-closest/
 */

export class Sum3Closest {
  /**
   * 先排序后再处理
   * @param arr
   * @param target
   * @returns
   */
  sortedEfficent(arr: number[], target: number) {
    const sortedArr = arr.concat().sort((a, b) => a - b)

    let result: number
    let minDiff = Number.MAX_SAFE_INTEGER
    for (let i = 0, len = sortedArr.length; i < len - 2; i++) {
      const pick1Value = sortedArr[i]
      let pick2Index = i + 1
      let pick3Index = len - 1
      while (pick2Index < pick3Index) {
        const pick2Value = sortedArr[pick2Index]
        const pick3Value = sortedArr[pick3Index]
        const sum = pick1Value + pick2Value + pick3Value
        const diff = Math.abs(sum - target)

        if (diff < minDiff) {
          minDiff = diff
          result = sum
        }
        if (sum === target) {
          return sum
        }
        if (sum < target) {
          // 移动 pick2Index，增加 sum，跳过相同的值
          do {
            pick2Index++
          } while (
            pick2Index < pick3Index &&
            sortedArr[pick2Index] === sortedArr[pick2Index - 1]
          )
        }
        if (sum > target) {
          // 移动 pick3Index，减小 sum，跳过相同的值
          do {
            pick3Index--
          } while (
            pick2Index < pick3Index &&
            sortedArr[pick3Index] === sortedArr[pick3Index + 1]
          )
        }
      }
    }
    return result
  }

  /**
   * 穷举法
   * @param arr
   * @param target
   * @returns
   */
  bruteForce(arr: number[], target: number) {
    // pick1 + pick2 + pick3 ~= target
    let result: number
    let minDiff = Number.MAX_SAFE_INTEGER
    for (let i = 0, len = arr.length; i < len - 2; i++) {
      const pick1Value = arr[i]
      let pick2Index = i + 1
      let pick3Index = len - 1
      while (pick2Index < pick3Index) {
        const pick2Value = arr[pick2Index]
        const pick3Value = arr[pick3Index]
        const sum = pick1Value + pick2Value + pick3Value
        const diff = Math.abs(sum - target)

        if (diff < minDiff) {
          minDiff = diff
          result = sum
        }

        pick3Index--
      }
    }

    return result
  }
}
