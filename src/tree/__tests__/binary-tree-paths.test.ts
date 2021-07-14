import { hasPathToSum } from '../binary-tree-paths'
import { BinaryTreeNode } from '../binary-tree'

describe('hasPathToSum', () => {
  it('hasPathToSum should judge if a path exists which sum equal to a given number', () => {
    const tree = new BinaryTreeNode(5)
    const left = tree.insertLeft(1)
    const right = tree.insertRight(4)
    left.insertLeft(2)
    left.insertRight(7)
    right.insertLeft(8)

    expect(hasPathToSum(tree, 13)).toBe(true)
    expect(hasPathToSum(tree, 20)).toBe(false)
  })
})
