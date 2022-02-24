/**
 * @fileoverview https://leetcode.com/problems/combination-sum/
 * (distinctNums: number[], target: number) => number[][]
 * 给定互不相同的数字数组 distinctNums，从中查找所有不相同的子集，
 * 要求子集只和 === 目标数字 target，每个数字可使用多次
 */

export class CombinationSum {
  firstSolution(nums: number[], target: number) {
    const len = nums.length
    if (len < 1) {
      return []
    }

    const result: number[][] = []
    const solution: number[] = []
    // 排序是为了避免结果中出现相同的 solution 集合
    nums.sort((a, b) => a - b)

    const loop = (remain = target, startIndex = 0) => {
      if (remain === 0) {
        // 需要 solution 的副本，否则后续的 pop() 会将其清空
        result.push([...solution])
        return
      }
      for (let i = startIndex; i < len && remain >= nums[i]; i++) {
        solution.push(nums[i])
        // 同一个值可以多次使用，所以连续推入 i
        loop(remain - nums[i], i)
        // backtrack
        solution.pop()
      }
    }

    loop()
    return result
  }
}
