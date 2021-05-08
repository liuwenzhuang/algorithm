/**
 * @fileoverview
 * 实现一个`Foo`方法，接受函数`func`和时间`wait`
 * 返回一个新函数，新函数即时连续多次执行，但也只限制在`wait`的时间执行一次
 */

export function limitFuncOnce(func: (...args: any[]) => any, wait: number) {
  let timeId: number

  return function (...args) {
    if (timeId) {
      return
    }
    timeId = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timeId)
    }, wait)
  }
}
