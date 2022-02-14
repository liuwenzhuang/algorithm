/**
 * @fileoverview
 * https://leetcode.com/problems/merge-k-sorted-lists/solution/
 */

import { LinkedNode, logLinkedList } from '../../linked-list/linked-list'
import { MergeTwoSortedLinkedList } from './merge-two-sorted-linked-list'

export class MergeNSortedLinkedList {
  mtsl = new MergeTwoSortedLinkedList()

  /**
   * 使用分治算法，减少 {@link MergeNSortedLinkedList.firstSolution} 中合并的次数
   * O(log2k * N)
   * @param lists
   */
  solution(lists: LinkedNode<number>[]) {
    const loop = (arr: LinkedNode<number>[]) => {
      const len = arr.length
      if (len < 2) {
        return arr[0] ?? null
      }
      const mid = Math.floor(len / 2)
      return this.mtsl.solution(
        loop(arr.slice(0, mid)),
        loop(arr.slice(mid)),
        false
      )
    }
    return logLinkedList(loop(lists))
  }

  /**
   * 两两合并，借助 {@link MergeTwoSortedLinkedList.solution } 中的合并算法
   * O(N * (k - 1)) = O(kN)
   * @param lists
   * @returns
   */
  firstSolution(lists: LinkedNode<number>[]) {
    let result = lists[0] ?? null
    for (let i = 1, len = lists.length; i < len; i++) {
      result = this.mtsl.solution(result, lists[i], false) as LinkedNode<number>
    }
    return logLinkedList(result)
  }
}
