/**
 * @fileoverview https://leetcode.com/problems/first-missing-positive/
 * (unsortedNums: number[]) => number
 * 给定无序的数组，找出缺失的最小的整数
 * O(n) 时间，O(1) 空间
 */

export class FirstMissingPositive {
  /**
   * 使 index 和 value - 1 对应，对于 value - 1 超出 nums 范围的情况不处理，
   * 否则将 value 放于 value - 1 的 index 上
   * @param nums
   * @returns
   */
  firstSolution(nums: number[]) {
    const len = nums.length

    for (let i = 0; i < len; i++) {
      const correspondIdx = nums[i] - 1
      if (i === correspondIdx || nums[i] === nums[correspondIdx]) {
        // value - 1 和 index 匹配 || 要交换的两值相同
        continue
      }
      if (correspondIdx >= 0 && correspondIdx < len) {
        // 交换当前的值到对的位置上
        ;[nums[i], nums[correspondIdx]] = [nums[correspondIdx], nums[i]]
        // 交换后，当前 index 的值需要重新校验是否匹配，使用 i-- 抵消 for 循环中的 i++
        i--
      }
    }

    for (let i = 0; i < len; i++) {
      if (nums[i] - 1 === i) {
        continue
      }
      return i + 1
    }
    // 数字间没有间隔，[1, 2, 3] => 4
    return len + 1
  }

  insertionSort(nums: number[]) {
    for (let i = 1, len = nums.length; i < len; i++) {
      let j = i - 1
      const cur = nums[i]

      while (j >= 0 && nums[j] > cur) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j + 1] = cur
    }

    return nums
  }
}
