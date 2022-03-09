/**
 * @fileoverview
 * https://leetcode.com/problems/jump-game/
 * (nums: number[]) => boolean
 * 数字数组中，每个位置的值表示可以跳的最大距离，
 * 如果存在一种跳法可以跳到最后，返回 true，否则返回 false，
 * 初始状态在 nums[0]
 */

export class JumpGame {
  firstSolution(nums: number[]) {
    let maxReach = 0
    for (let i = 0; i <= maxReach; i++) {
      maxReach = Math.max(maxReach, nums[i] + i)
      if (maxReach >= nums.length - 1) {
        return true
      }
    }

    return false
  }
}
