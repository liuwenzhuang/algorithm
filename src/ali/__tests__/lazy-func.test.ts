import { lazy } from '../lazy-func'

describe('lazy', () => {
  it('lazy should work properly', (done) => {
    const lazyCalc = lazy(2, done)
      .add(2)
      .delay(1000)
      .tap(console.log)
      .delay(3000)
      .multiply(3)

    setTimeout(() => {
      console.log('setTimeout ' + new Date().toLocaleTimeString())
      lazyCalc.output()
    }, 1000)

    console.log('start ' + new Date().toLocaleTimeString())
  })
})
