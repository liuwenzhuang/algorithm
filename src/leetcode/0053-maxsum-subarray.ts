/**
 * @fileoverview
 * https://leetcode.com/problems/maximum-subarray/
 * (nums: number[]) => number
 * 对于数组数组，找到各元素之和 sum 最大的子数组（连续），并返回 sum
 */

export class MaxsumSubarray {
  /**
   * dp solution
   * O(n) 空间
   * @param nums
   * @returns
   */
  firstSolution(nums: number[]) {
    const len = nums.length
    if (len < 1) {
      return 0
    }
    // 到对应 index 为止的 sum
    let dp: number[] = [nums[0]]
    let max = dp[0]
    for (let i = 1; i < len; i++) {
      dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0)
      max = Math.max(dp[i], max)
    }

    return max
  }

  /**
   * 非 dp
   * O(1) 空间
   * @param nums
   * @returns
   */
  noDpSolution(nums: number[]) {
    const len = nums.length
    if (len < 1) {
      return 0
    }

    let currentSum = nums[0]
    let max = currentSum
    for (let i = 1; i < len; i++) {
      currentSum = Math.max(currentSum + nums[i], nums[i])
      max = Math.max(max, currentSum)
    }

    return max
  }
}
