/**
 * @fileoverview
 * https://leetcode.com/problems/permutations/
 * (nums: number[]) => number[][]
 * 对于值互不相同的数组 nums，返回其所有变体
 */

export class ArrayPermutations {
  firstSolution(nums: number[]) {
    // 递归，arr 的变体 = 将 arr[0] 插入 arr[1...n] 的所有变体的所有位置
    const loop = (arr: number[]) => {
      if (arr.length < 2) {
        // 小于 2 的，无变体
        return [arr]
      }
      const container: number[][] = []
      const first = arr[0]
      const resultExceptFirst = loop(arr.slice(1))
      for (let i = 0; i < resultExceptFirst.length; i++) {
        const permutation = resultExceptFirst[i]
        const len = permutation.length
        for (let j = 0; j <= len; j++) {
          container.push([
            ...permutation.slice(0, j),
            first,
            ...permutation.slice(j),
          ])
        }
      }
      return container
    }

    return loop(nums)
  }

  backtrackSolution(nums: number[]) {
    const used: boolean[] = []
    const result: number[][] = []

    const dfs = (arr: number[], permutation: number[] = []) => {
      if (permutation.length === nums.length) {
        // 其中一个变体
        result.push([...permutation])
      }
      for (let i = 0, len = arr.length; i < len; i++) {
        if (used[i]) {
          // 当前坐标的值已经用过了
          continue
        }
        permutation.push(arr[i])
        used[i] = true
        dfs(arr, permutation)
        // backtrack
        permutation.pop()
        used[i] = false
      }
    }

    dfs(nums)
    return result
  }
}
