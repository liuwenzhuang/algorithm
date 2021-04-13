export function findMaxRepeat(inputArr: number[]) {
  const arr = inputArr.concat().sort((a, b) => a - b)
  let mostCount = 1
  let curCount = 1
  let mostValue = arr[0]
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    let index = i + 1
    if (arr[i] === arr[index]) {
      curCount += 1
      if (curCount > mostCount) {
        mostCount = curCount
        mostValue = arr[i]
      }
    } else {
      curCount = 1
    }
  }
  const index = inputArr.findIndex((item) => item === mostValue)
  return {
    index,
    mostValue,
    mostCount,
  }
}
