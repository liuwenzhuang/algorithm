import { MaxStack } from '../max-stack'

describe('MaxStack', () => {
  it('MaxStack has a property maxValues as a ordered stack', () => {
    const maxStack = new MaxStack()
    maxStack.push(3)
    maxStack.push(2)
    maxStack.push(5)

    expect(maxStack.maxValues.data).toEqual([3, 5])
  })
})
