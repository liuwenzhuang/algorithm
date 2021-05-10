function equals(a: any, b: any) {
  return a === b
}

export class LevenshteinDistance {
  private readonly ADD = 3
  private readonly DELETE = 2
  private readonly UPDATE = 1
  private readonly LEAVE = 0

  /**
   * 得到差异操作矩阵，矩阵右下角的数值即差异次数
   * @param arr1
   * @param arr2
   * @param equalFn
   * @returns
   */
  getMatrix(
    arr1: any[],
    arr2: any[],
    equalFn: (a: any, b: any) => boolean = equals
  ) {
    const m = arr1.length
    const n = arr2.length
    const matrix = []
    for (let i = 0; i <= m; i++) {
      matrix.push([i])
    }
    for (let j = 1; j <= n; j++) {
      matrix[0][j] = j
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (equalFn(arr1[i - 1], arr2[j - 1])) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1, //delete
            matrix[i][j - 1] + 1 //add
          )
        }
      }
    }
    return matrix
  }

  /**
   * 对数组进行差异化判断
   * @param arr1
   * @param arr2
   * @param diffFn
   * @returns
   */
  diffArray(
    arr1: any[],
    arr2: any[],
    diffFn: (a: any, b: any) => boolean = equals
  ) {
    const matrix = this.getMatrix(arr1, arr2, diffFn)
    let m = arr1.length
    let i = m
    let n = arr2.length
    let j = n
    const edits = []
    let current = matrix[i][j]
    while (i > 0 || j > 0) {
      // the last line
      if (i === 0) {
        edits.unshift(this.ADD)
        j--
        continue
      }
      // the last col
      if (j === 0) {
        edits.unshift(this.DELETE)
        i--
        continue
      }
      const northWest = matrix[i - 1][j - 1]
      const west = matrix[i - 1][j]
      const north = matrix[i][j - 1]

      const min = Math.min(north, west, northWest)

      if (min === west) {
        edits.unshift(this.DELETE) //delete
        i--
        current = west
      } else if (min === northWest) {
        if (northWest === current) {
          edits.unshift(this.LEAVE) //no change
        } else {
          edits.unshift(this.UPDATE) //update
          current = northWest
        }
        i--
        j--
      } else {
        edits.unshift(this.ADD) //add
        j--
        current = north
      }
    }

    m = 0
    n = 0
    const steps = []
    let step = {
      index: null,
      add: 0,
      removed: [],
    }

    for (let i = 0; i < edits.length; i++) {
      if (edits[i] > 0) {
        // NOT LEAVE
        if (step.index === null) {
          step.index = n
        }
      } else {
        //LEAVE
        if (step.index != null) {
          steps.push(step)
          step = {
            index: null,
            add: 0,
            removed: [],
          }
        }
      }
      switch (edits[i]) {
        case this.LEAVE:
          m++
          n++
          break
        case this.ADD:
          step.add++
          n++
          break
        case this.DELETE:
          step.removed.push(arr1[n])
          m++
          break
        case this.UPDATE:
          step.add++
          step.removed.push(arr1[n])
          m++
          n++
          break
      }
    }
    if (step.index != null) {
      steps.push(step)
    }
    return steps
  }
}
