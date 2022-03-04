/**
 * @fileoverview
 * https://leetcode.com/problems/jump-game-ii/
 * (nums: number[]) => number
 * 非负的整数数组，每个元素表示跳的最大长度，要求得到最小的跳数，
 * 起始在位置 0
 */

export class JumpGame2 {
  /**
   * 从右边依次确定要到达的位置，从左边找最早能够触达的位置
   * @param nums
   * @returns
   */
  backJumpSolution(nums: number[]) {
    // [2,3,1,1,4] 2
    let step = 0
    let cursor = nums.length - 1
    while (cursor !== 0) {
      for (let i = 0; i <= cursor; i++) {
        // 最左边开始找能够触达 cursor 的
        if (i + nums[i] >= cursor) {
          step++
          cursor = i
          break
        }
      }
    }

    return step
  }

  bfsSolution(nums: number[]) {
    const len = nums.length
    if (len < 2) {
      return 0
    }
    // 当前跳的终止区域
    let currentEnd = 0
    // 当前跳区域的最大值
    let newEnd = 0
    // 当前位置
    let cursor = 0
    let endIndex = len - 1
    let step = 1
    for (; cursor <= currentEnd; cursor++) {
      newEnd = Math.max(newEnd, cursor + nums[cursor])
      if (newEnd >= endIndex) {
        return step
      }

      if (cursor === currentEnd) {
        currentEnd = newEnd
        step++
      }
    }
  }
}
