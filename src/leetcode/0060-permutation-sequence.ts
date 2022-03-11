/**
 * @fileoverview
 * https://leetcode.com/problems/permutation-sequence/
 * (n: number, k:number) => string
 * n 表示 [1...n] 的数组，此数组有 n! 个字符串表示的变体，
 * 返回第 k 个变体
 */

export class PermutationSequence {
  firstSolution(n: number, k: number) {
    let str = ''
    for (let i = 1; i <= n; i++) {
      str += i
    }

    // permutation 的个数
    let permutationCount = 0
    const used: boolean[] = []
    let kthPermutation: string = null

    const loop = (permutation: string = '') => {
      if (permutation.length === n) {
        permutationCount++
        if (permutationCount === k) {
          kthPermutation = permutation
        }
        return
      }
      for (let i = 0; i < n; i++) {
        if (used[i]) {
          continue
        }
        used[i] = true
        loop(permutation + str.charAt(i))

        if (permutationCount === k) {
          // 找到了第 k 个
          break
        }

        // backtrack
        used[i] = false
      }
    }

    loop()
    return kthPermutation
  }
}
