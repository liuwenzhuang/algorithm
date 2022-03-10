// 请实现如下功能

// const lazyCalc = lazy(2)
// .add(2)
// .tap(console.log)
// .delay(1000)
// .multiply(3)
//
// setTimeout(() => {
// lazyCalc.output();
// }, 1000);
//
// console.log('start');

// 输出：
// start
// 等待1秒
// 4
// 等待1秒
// 12

export function lazy(init: number, done) {
  let cbList = []
  return {
    result: init,
    add(x: number) {
      cbList.push(() => {
        this.result += x
      })
      return this
    },
    tap(cb: (x: any) => void) {
      cbList.push(() => {
        cb(this.result + ' ' + new Date().toLocaleTimeString())
      })
      return this
    },
    delay(x: number) {
      const delayInvoke = () => {
        setTimeout(() => {
          this.output()
          done()
        }, x)
      }
      delayInvoke.__delayInvoke__ = true
      cbList.push(delayInvoke)
      return this
    },
    multiply(x: number) {
      cbList.push(() => {
        this.result *= x
        console.log(this.result + ' ' + new Date().toLocaleTimeString())
      })
      return this
    },
    output() {
      while (cbList.length) {
        const next = cbList.shift()
        next()
        if (next.__delayInvoke__) {
          break
        }
      }
    },
  }
}
