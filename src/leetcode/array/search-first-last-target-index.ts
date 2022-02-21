/**
 * @fileoverview
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * (nums: number[], target: number) => [number, number]
 * 升序数组中，查找 target 第一次和最后一次出现的 index，返回二元组，未找到则返回 [-1, -1]
 */

export class SearchFirstLastTargetIndex {
  firstSolution(nums: number[], target: number) {
    let resultLeftIndex = -1
    let resultRightIndex = -1

    const len = nums.length
    let left = 0
    let right = len - 1

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      const midValue = nums[mid]
      if (midValue === target) {
        let midBackup = mid
        do {
          resultLeftIndex = midBackup
        } while (nums[--midBackup] === target)

        midBackup = mid
        do {
          resultRightIndex = midBackup
        } while (nums[++midBackup] === target)

        return [resultLeftIndex, resultRightIndex]
      }

      if (midValue < target) {
        left = mid + 1
      }
      if (midValue > target) {
        right = mid - 1
      }
    }

    return [resultLeftIndex, resultRightIndex]
  }
}
