/**
 * @fileoverview https://leetcode.com/problems/combination-sum/
 * (distinctNums: number[], target: number) => number[][]
 * 给定互不相同的数字数组 distinctNums，从中查找所有不相同的子集，
 * 要求子集只和 === 目标数字 target，每个数字只可使用1次
 */

export class CombinationSum2 {
  firstSolution(nums: number[], target: number) {
    const len = nums.length

    nums.sort((a, b) => a - b)
    const result: number[][] = []
    const solution: number[] = []

    // [1, 1, 2, 5, 6, 7, 10], 8
    // remain=8 index=0 i=0 nums[i]=1 solution=[1]
    // remain=7 index=1 i=1 nums[i]=1 solution=[1, 1]
    const loop = (remain = target, index = 0) => {
      if (remain === 0) {
        result.push([...solution])
        return
      }
      for (let i = index; i < len && remain >= nums[i]; i++) {
        if (i === index || nums[i] !== nums[i - 1]) {
          // 当前 i 是本次第一个要插入的 || 因为 for 循环相同的数字不必再次处理
          solution.push(nums[i])
          loop(remain - nums[i], i + 1)
          solution.pop()
        }
      }
    }
    loop()
    return result
  }
}
