import { getAllPermutaions } from '../permutations'

describe('find all permutations of str', () => {
  test('getAllPermutations work well', () => {
    expect(() => getAllPermutaions(null)).toThrowError()

    expect(getAllPermutaions('cats')).toContain('scat')
  })

  test('getAllPermutations result size will be "n!", n is length of str', () => {
    function factorial(n) {
      if (n === 1 || n === 0) {
        return 1
      }
      let result = 1
      for (let i = 1; i <= n; i++) {
        result *= i
      }
      return result
    }
    expect(getAllPermutaions('ab').size).toBe(factorial('ab'.length))
    expect(getAllPermutaions('abcdef').size).toBe(factorial('abcdef'.length))
  })
})
