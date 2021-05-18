export class BinarySearch {
  search(sortedArr: number[], candidate: number) {
    let startIndex = 0
    let endIndex = sortedArr.length - 1

    const order = sortedArr[startIndex] < sortedArr[endIndex] ? 'asc' : 'desc'

    while (startIndex <= endIndex) {
      const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

      const tryNum = sortedArr[midIndex]

      if (tryNum === candidate) {
        return midIndex
      }

      if (tryNum < candidate) {
        order === 'asc'
          ? (startIndex = midIndex + 1)
          : (endIndex = midIndex - 1)
      }

      if (tryNum > candidate) {
        order === 'asc'
          ? (endIndex = midIndex - 1)
          : (startIndex = midIndex + 1)
      }
    }

    return -1
  }
}
