export class StrStrImplementation {
  firstSolution(haystack: string, neddle: string) {
    if (neddle === '') {
      return 0
    }
    let cursor = 0
    const neddleLen = neddle.length
    for (let i = 0, len = haystack.length; i < len; i++) {
      if (haystack[i] === neddle[cursor]) {
        cursor++
        if (cursor >= neddleLen) {
          return i - cursor + 1
        }
      } else {
        cursor = 0
      }
    }

    return -1
  }
}
