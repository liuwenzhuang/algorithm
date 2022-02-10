/**
 * @fileoverview
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

import { LinkedNode, logLinkedList } from '../../linked-list/linked-list'

export class MergeTwoSortedLinkedList {
  // TODO: optimize this solution
  solution(head1: LinkedNode, head2: LinkedNode) {
    let cursor1 = head1
    let cursor2 = head2
    let newHead: LinkedNode = null
    let newCursor: LinkedNode = null

    while (cursor1 || cursor2) {
      const value1 = cursor1?.value ?? Number.MAX_SAFE_INTEGER
      const value2 = cursor2?.value ?? Number.MAX_SAFE_INTEGER

      if (value1 < value2) {
        if (!newHead) {
          newCursor = newHead = new LinkedNode(value1)
        } else {
          newCursor = newCursor.append(value1)
        }
        cursor1 = cursor1.next
      }

      if (value1 > value2) {
        if (!newHead) {
          newCursor = newHead = new LinkedNode(value2)
        } else {
          newCursor = newCursor.append(value2)
        }
        cursor2 = cursor2.next
      }

      if (value1 === value2) {
        if (!newHead) {
          newCursor = newHead = new LinkedNode(value1)
        } else {
          newCursor = newCursor.append(value1)
        }
        newCursor = newCursor.append(value2)
        cursor1 = cursor1.next
        cursor2 = cursor2.next
      }
    }

    return logLinkedList(newHead)
  }
}
