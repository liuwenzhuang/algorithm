/**
 * @fileoverview
 * https://leetcode.com/problems/permutations/
 * (nums: number[]) => number[][]
 * 对于值可能有重复的数组 nums，返回其所有变体
 */

export class ArrayPermutations2 {
  backtrackSolution(nums: number[]) {
    nums.sort((a, b) => a - b)

    const result: number[][] = []

    const dfs = (arr: number[], permutation: number[] = []) => {
      if (permutation.length === arr.length) {
        result.push([...permutation])
        return
      }
      for (let i = 0, len = arr.length; i < len; i++) {
        let num = arr[i]
        if (num === arr[i - 1] || num === null) {
          continue
        }
        arr[i] = null
        permutation.push(num)
        dfs(arr, permutation)
        // backtrack
        permutation.pop()
        arr[i] = num
      }
    }

    dfs(nums)
    return result
  }
}
