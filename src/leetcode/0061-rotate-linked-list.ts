/**
 * @fileoverview
 * https://leetcode.com/problems/rotate-list/
 * (head: LinkedNode, k: number) => LinkedNode
 * 给定链表的 head，将倒数第 k 个节点（包含）后的内容放到头部
 * 如 0->1->2
 * k=1  ===>  2->0->1
 * k=2  ===>  1->2->0
 * k=3  ===>  0->1->2
 */

import { LinkedNode } from '../linked-list/linked-list'

export class RotateLinkedList {
  firstSolution(head: LinkedNode, k: number) {
    if (!head?.next) {
      return head
    }

    let left = head
    let prevLeft = null
    let right = head
    let count = 0
    // right 正数第 k 个节点
    while (count < k) {
      // 到尾后，再次从头部开始
      right = right ? right.next : head.next
      count++
    }

    // left -> right 往后一起挪，待 right 到尾部，left 就是倒数 k+1 的位置
    while (right) {
      prevLeft = left
      left = left.next
      right = right.next
    }

    if (!prevLeft) {
      // 没动过，不需要变动
      return head
    }

    prevLeft.next = null
    let connector = left

    while (connector?.next) {
      // 找到尾部
      connector = connector.next
    }
    connector.next = head

    return left
  }
}
