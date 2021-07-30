/**
 * @fileoverview
 * https://leetcode.com/problems/add-two-numbers/
 */

import { LinkedNode, logLinkedList } from '../../linked-list/linked-list'

export function addTwoLinkedList(
  head1: LinkedNode<number>,
  head2: LinkedNode<number>
) {
  let newHead = new LinkedNode<number>(0)
  const newHeadPointer = newHead
  // 进位，如 4+6=10，当前值为 0，进位为 1，进位要参与下一个节点的计算
  let carry = 0
  while (head1 || head2 || carry !== 0) {
    let value1 = 0
    let value2 = 0

    if (head1) {
      value1 = head1.value
      head1 = head1.next
    }

    if (head2) {
      value2 = head2.value
      head2 = head2.next
    }

    // 带上进位计算，取个位数
    const nodeValue = (value1 + value2 + carry) % 10
    carry = Math.floor((value1 + value2 + carry) / 10)
    newHead.value = nodeValue

    if (!head1 && !head2 && carry === 0) {
      // 两个链表都没了，且没有进位
      break
    }

    newHead.append(0)
    newHead = newHead.next
  }
  return logLinkedList(newHeadPointer)
}
