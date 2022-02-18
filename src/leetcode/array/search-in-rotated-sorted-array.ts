/**
 * @fileoverview
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * (nums: number[], target: number) => number
 * nums 是有序数组在某个 index 处，其前后内容顺序颠倒的结果，
 * O(log n) 的时间复杂度，找到 target 在 nums 中的 index
 */

export class SearchInRotatedSortedArray {
  firstSolution(nums: number[], target: number) {
    const len = nums.length
    let left = 0
    let right = len - 1

    while (left <= right) {
      const midIndex = left + Math.floor((right - left) / 2)
      const midValue = nums[midIndex]

      if (midValue === target) {
        return midIndex
      }

      // midIndex = 2 midValue = 1 target = 2
      if (midValue < target) {
        if (target >= midValue && target <= nums[right]) {
          // 升序阶段
          left = midIndex + 1
        } else {
          // 降序阶段
          right = midIndex - 1
        }
      } else {
        if (target >= nums[left] && target <= midValue) {
          // 升序阶段
          right = midIndex - 1
        } else {
          // 降序阶段
          left = midIndex + 1
        }
      }
    }

    return -1
  }
}
