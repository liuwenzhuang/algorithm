import { flattenObject, flattenObject2 } from '../flatten-object'

describe('Flattenobject', () => {
  it('Flattenobject should balala', () => {
    const actual = flattenObject2({
      a: 1,
      b: [1, 2, { c: true }, [3]],
      d: { e: 2, f: 3 },
      g: null,
    })

    const expected = {
      a: 1,
      'b[0]': 1,
      'b[1]': 2,
      'b[2].c': true,
      'b[3][0]': 3,
      'd.e': 2,
      'd.f': 3,
      // "g": null,  值为null或者undefined，丢弃
    }

    expect(actual).toEqual(expected)
  })
})
