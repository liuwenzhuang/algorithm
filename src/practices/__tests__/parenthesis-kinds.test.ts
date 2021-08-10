import { getAllParenthesisKinds } from '../parenthesis-kinds'

describe('getAllParenthesisKinds', () => {
  it('getAllParenthesisKinds', () => {
    let result = getAllParenthesisKinds(0)
    expect(result).toBe(null)

    result = getAllParenthesisKinds(1)
    expect(result).toIncludeAllMembers(['()'])

    result = getAllParenthesisKinds(2)
    expect(result).toIncludeAllMembers(['()()', '(())'])

    result = getAllParenthesisKinds(3)
    expect(result).toIncludeAllMembers(['()()()', '(())()', '()(())', '((()))'])
  })
})
