/**
 * @fileoverview
 * https://leetcode.com/problems/4sum/
 * 返回 4 个不同下标的数据，4 个数据之和 === target
 */

export class Sum4ToTarget {
  solution(nums: number[], target: number) {
    const sortedNums = nums.concat().sort((a, b) => a - b)
    const result: [number, number, number, number][] = []
    for (
      let pick1Index = 0, len = sortedNums.length;
      pick1Index < len - 3;
      pick1Index++
    ) {
      if (
        pick1Index > 0 &&
        sortedNums[pick1Index] === sortedNums[pick1Index - 1]
      ) {
        continue
      }
      for (
        let pick2Index = pick1Index + 1;
        pick2Index < len - 2;
        pick2Index++
      ) {
        if (
          pick2Index > 1 &&
          sortedNums[pick2Index] === sortedNums[pick2Index - 1]
        ) {
          continue
        }
        let pick3Index = pick2Index + 1
        let pick4Index = len - 1

        while (pick3Index < pick4Index) {
          const pick1Value = sortedNums[pick1Index]
          const pick2Value = sortedNums[pick2Index]
          const pick3Value = sortedNums[pick3Index]
          const pick4Value = sortedNums[pick4Index]
          const sum = pick1Value + pick2Value + pick3Value + pick4Value

          if (sum === target) {
            result.push([pick1Value, pick2Value, pick3Value, pick4Value])
          }

          if (sum < target || sum === target) {
            // pick3Index 右移，增大 sum
            // 找到一个解后，也需要右移 pick3Index
            do {
              pick3Index++
            } while (
              pick3Index < pick4Index &&
              sortedNums[pick3Index] === sortedNums[pick3Index + 1]
            )
          }

          if (sum > target || sum === target) {
            // pick4Index 左移，减小 sum
            // 找到一个解后，也需要左移 pick4Index
            do {
              pick4Index--
            } while (
              pick3Index < pick4Index &&
              sortedNums[pick4Index] === sortedNums[pick4Index + 1]
            )
          }
        }
      }
    }

    return result
  }
}
