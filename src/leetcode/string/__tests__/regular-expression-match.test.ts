import {
  dpRegularExpressionMatch,
  recursiveRegularExpressionMatch,
} from '../regular-expression-match'

describe('recursiveRegularExpressionMatch', () => {
  it('recursiveRegularExpressionMatch', () => {
    let result = recursiveRegularExpressionMatch('aa', 'a')
    expect(result).toBe(false)

    result = recursiveRegularExpressionMatch('caab', 'c*a*b')
    expect(result).toBe(true)

    result = recursiveRegularExpressionMatch('ab', '.*')
    expect(result).toBe(true)

    result = recursiveRegularExpressionMatch('mississippi', 'mis*is*p*.')
    expect(result).toBe(false)
  })

  it('dpRegularExpressionMatch', () => {
    let result = dpRegularExpressionMatch('aa', 'a')
    expect(result).toBe(false)

    result = dpRegularExpressionMatch('caab', 'c*a*b')
    expect(result).toBe(true)

    result = dpRegularExpressionMatch('ab', '.*')
    expect(result).toBe(true)

    result = dpRegularExpressionMatch('mississippi', 'mis*is*p*.')
    expect(result).toBe(false)
  })
})
