/**
 * @fileoverview
 * https://leetcode.com/problems/next-permutation/
 * 获取 number[] 的下一个变体，要求结果的排序尽量遵循升序
 */

export class NextPermutationOfArray {
  /**
   * 来自 leetcode 的方法：
   * 1. 从尾部向左查找到第一个降序的数据，nums[i]， nums[i] < nums[i + 1]
   * 2. 从尾部向左查找到第一个比 nums[i] 大的 nums[j]
   * 3. 交换 nums[i] 和 nums[j]
   * 4. 将 nums[i+1] 到 nums[len - 1] 逆序
   * @param nums
   */
  solution(nums: number[]) {
    const len = nums.length
    let i = len - 2
    while (i >= 0 && nums[i + 1] < nums[i]) {
      i--
    }
    if (i >= 0) {
      let j = len - 1
      while (nums[j] < nums[i]) {
        j--
      }
      this.swap(nums, i, j)
    }

    this.reverse(nums, i + 1)
    return nums
  }

  swap(arr: any[], leftIndex: number, rightIndex: number) {
    ;[arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]]
  }

  reverse(arr: any[], index: number) {
    let left = index
    let right = arr.length - 1
    while (left < right) {
      this.swap(arr, left, right)
      left++
      right--
    }
  }

  /**
   * 计算 nums 的升序指标，数值愈大则表示升序效果愈强
   * @param nums
   * @returns
   */
  computeArrOrderIndicator(nums: number[]) {
    const len = nums.length
    let result = 0
    for (let i = 1; i < len; i++) {
      const prev = nums[i - 1]
      const cur = nums[i]
      if (cur >= prev) {
        result++
      } else {
        result--
      }
    }
    return result
  }
}
