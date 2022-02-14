export class MergeSort {
  solution(arr: number[]) {
    const sort = (list: number[]) => {
      if (list.length < 2) {
        return list
      }
      let left = 0
      let mid = Math.floor(list.length / 2)
      return mergeTwoSortedArr(
        sort(list.slice(left, mid)),
        sort(list.slice(mid))
      )
    }

    function mergeTwoSortedArr(arr1: number[], arr2: number[]) {
      let sortedResult: number[] = []

      while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
          sortedResult.push(arr1.shift())
        } else {
          sortedResult.push(arr2.shift())
        }
      }

      sortedResult = sortedResult.concat(arr1, arr2)
      return sortedResult
    }

    return sort(arr)
  }
}