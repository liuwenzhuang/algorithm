/**
 * @fileoverview
 * https://leetcode.com/problems/merge-k-sorted-lists/solution/
 */

import { LinkedNode, logLinkedList } from '../../linked-list/linked-list'
import { MergeTwoSortedLinkedList } from './merge-two-sorted-linked-list'

export class MergeNSortedLinkedList {
  /**
   * 两两合并，借助 {@link MergeTwoSortedLinkedList.solution } 中的合并算法
   * O(N * (k - 1)) = O(kN)
   * @param lists
   * @returns
   */
  firstSolution(lists: LinkedNode<number>[]) {
    let result = lists[0] ?? null
    const mtsl = new MergeTwoSortedLinkedList()
    for (let i = 1, len = lists.length; i < len; i++) {
      result = mtsl.solution(result, lists[i], false) as LinkedNode<number>
    }
    return logLinkedList(result)
  }
}
