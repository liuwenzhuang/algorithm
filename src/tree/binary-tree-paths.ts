import { BinaryTreeNode } from './binary-tree'

export function hasPathToSum(tree: BinaryTreeNode<number>, sum: number) {
  if (!tree) {
    return false
  }

  let remainder = sum - tree.value // 剩下的值

  if (!tree.left && !tree.right && remainder === 0) {
    return true
  }

  let result = false
  const currentNode = tree

  if (currentNode.left) {
    result = result || hasPathToSum(currentNode.left, remainder)
  }

  if (currentNode.right) {
    result = result || hasPathToSum(currentNode.right, remainder)
  }

  return result
}
