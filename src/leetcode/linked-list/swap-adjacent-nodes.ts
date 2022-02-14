/**
 * @fileoverview
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 * 两两交换，不直接改变 value
 * 1 -> 3 -> 2 -> 4
 * 3 -> 1 -> 4 -> 2
 */

import { LinkedNode, logLinkedList } from '../../linked-list/linked-list'

export class SwapAdjacentNodes {
  /**
   * 递归处理 A1, A2, A3...An，交换 A1 和 A2，则:
   * A2.next = A1
   * A1.next = swapedResult(A3...An)
   * @param head
   * @returns
   */
  recursiveSolution(head: LinkedNode) {
    const loop = (node: LinkedNode) => {
      const prev = node
      const cur = node?.next
      if (!prev || !cur) {
        return node
      }

      // 设置新的头
      const newHead = cur

      const remainNode = cur.next
      cur.next = prev
      prev.next = loop(remainNode)

      return newHead
    }
    return logLinkedList(loop(head))
  }

  /**
   * 两两交换，O(n)
   * @param head
   * @returns
   */
  firstSolution(head: LinkedNode) {
    let cursor1 = head
    let cursor2 = cursor1.next

    if (!cursor1 || !cursor2) {
      return logLinkedList(head)
    }

    let newHead = cursor2

    while (cursor1 && cursor2) {
      const next = cursor2.next
      cursor2.next = cursor1
      if (!next || !next.next) {
        cursor1.next = next
      } else {
        // 指向 next.next 的原因是，下一次交换时，next.next 会成为 cursor1.next
        cursor1.next = next.next
      }

      cursor1 = next
      cursor2 = cursor1?.next ?? null
    }

    return logLinkedList(newHead)
  }
}
