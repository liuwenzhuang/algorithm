import { LinkedNode, logLinkedList } from '../../linked-list/linked-list'

export class RemoveNthNodeFromEnd {
  solution(head: LinkedNode, n: number) {
    if (n < 1) {
      return logLinkedList(head)
    }

    // a -> b -> c -> d -> e -> f -> null
    //                          | n = 1
    //                | ------- | n = 3
    // 橡皮筋策略，left 为橡皮筋头（要删除的节点），right 为橡皮筋尾
    let left = head
    let right = head

    // 从头确定橡皮筋尾部的位置
    while (right.next !== null && n > 1) {
      right = right.next
      n--
    }

    // 橡皮筋头尾同时向后移动，直到橡皮筋尾部到达链表尾部，left 就是要被删除的节点
    let beforeLeft = head
    while (right.next !== null && left.next !== null) {
      right = right.next
      beforeLeft = left
      left = left.next
    }

    if (left === head) {
      // 删除头部
      head = head.next
    } else {
      beforeLeft.next = left.next
    }

    return logLinkedList(head)
  }
}
