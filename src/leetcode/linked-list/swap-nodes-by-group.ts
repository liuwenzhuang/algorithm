/**
 * @fileoverview
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * 1 -> 2 -> 3 -> 4 -> 5 groupSize = 3
 * 3 -> 2 -> 1 -> 4 -> 5
 * 前3个为一组，顺序调转后，剩余节点不够分组，不进行调整
 */

import { LinkedNode, logLinkedList } from '../../linked-list/linked-list'

export class SwapNodesByGroup {
  firstSolution(head: LinkedNode, groupSize: number) {
    const loop = (node: LinkedNode, size: number) => {
      const nodeList: LinkedNode[] = []
      if (!node) {
        return node
      }
      let cursor = node
      let newHead = node
      let count = size
      while (count > 0) {
        if (!cursor) {
          // 不够分组的个数
          return node
        }
        nodeList.push(cursor)
        cursor = cursor.next
        count--
      }
      // [1, 2, 3] 4->5
      newHead = nodeList[nodeList.length - 1]
      nodeList[0].next = loop(newHead.next, size)

      for (let i = nodeList.length - 1; i > 0; i--) {
        nodeList[i].next = nodeList[i - 1]
      }

      return newHead
    }

    const result = loop(head, groupSize)
    return logLinkedList(result)
  }
}
