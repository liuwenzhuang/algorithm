export class BinaryTreeNode<T = any> {
  value: T
  left: BinaryTreeNode<T>
  right: BinaryTreeNode<T>

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }

  insertLeft(value: T) {
    this.left = new BinaryTreeNode(value)
    return this.left
  }

  insertRight(value: T) {
    this.right = new BinaryTreeNode(value)
    return this.right
  }
}
