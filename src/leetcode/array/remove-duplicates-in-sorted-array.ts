/**
 * @fileoverview
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 不增加额外的内存开销，不能新建 array，需要在原数组上操作
 */

export class RemoveDuplicatesInSortedArray {
  firstSolution(sortedNums: number[]) {
    for (let i = 1; i < sortedNums.length; i++) {
      const prev = sortedNums[i - 1]
      const cur = sortedNums[i]
      if (cur === prev) {
        sortedNums.splice(i, 1)
        i--
      }
    }
    return sortedNums
  }
}
