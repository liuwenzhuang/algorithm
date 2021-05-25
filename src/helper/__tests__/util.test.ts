import * as util from '../util'

describe('hasOwnProperty', () => {
  it('hasOwnProperty should work for objects inherited null', () => {
    const obj = Object.create(null)
    const func1 = jest.fn()
    const func2 = jest.fn()
    try {
      obj.hasOwnProperty('test')
    } catch (err) {
      func1(err)
    }

    try {
      util.hasOwnProperty(obj, 'test')
    } catch (err) {
      func2()
    }

    expect(func1).toHaveBeenCalledTimes(1)
    expect(func2).not.toHaveBeenCalled()
  })
})

describe('getRandom', () => {
  afterAll(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })
  it('getRandom should return an interger between [n, m]', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0)
    let random = util.getRandom(1, 3)
    expect(random).toBe(1)

    // >= 0.333333...
    jest.spyOn(global.Math, 'random').mockReturnValue(0.34)
    random = util.getRandom(1, 3)
    expect(random).toBe(2)

    // >= 0.666666...
    jest.spyOn(global.Math, 'random').mockReturnValue(0.67)
    random = util.getRandom(1, 3)
    expect(random).toBe(3)
  })
})
