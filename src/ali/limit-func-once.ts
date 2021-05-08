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
