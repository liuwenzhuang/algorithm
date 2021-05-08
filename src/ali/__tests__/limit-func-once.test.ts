import { limitFuncOnce } from '../limit-func-once'

describe('limitFuncOnce', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('limitFuncOnce should limit returned func only trigger once on wait point', (done) => {
    const func = jest.fn()

    const ret = limitFuncOnce(func, 500)
    ret('a')
    ret('b')
    ret('c')

    expect(setTimeout).toHaveBeenCalledTimes(1)

    setTimeout(() => {
      try {
        expect(func).toHaveBeenCalledTimes(1)
        expect(func).toHaveBeenCalledWith('a')
        done()
      } catch (err) {
        done(err)
      }
    }, 600)

    jest.runAllTimers()
  })
})
