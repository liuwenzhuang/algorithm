/**
 * @fileoverview
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

import { LinkedNode, logLinkedList } from '../../linked-list/linked-list'

export class MergeTwoSortedLinkedList {
  solution(head1: LinkedNode, head2: LinkedNode) {
    let cursor1 = head1
    let cursor2 = head2
    let newHead: LinkedNode = new LinkedNode(0) // fake head
    let newCursor: LinkedNode = newHead

    while (cursor1 && cursor2) {
      const value1 = cursor1.value
      const value2 = cursor2.value

      if (value1 < value2) {
        newCursor.next = cursor1
        cursor1 = cursor1.next
      } else {
        newCursor.next = cursor2
        cursor2 = cursor2.next
      }
      newCursor = newCursor.next
    }

    // linkedlist1 或 linkedlist2 中未添加完的
    newCursor.next = cursor1 || cursor2

    // 因为 newHead 是新增的节点，需要去除
    return logLinkedList(newHead.next)
  }
}
