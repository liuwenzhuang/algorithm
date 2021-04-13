export function getAllPermutaions(str: string) {
  const len = str?.length ?? 0
  if (len < 1) {
    throw new Error('str must be not empty')
  }

  if (len === 1) {
    return new Set([str])
  }

  const lastChar = str[len - 1]
  const permutationsExceptLastChar = getAllPermutaions(str.slice(0, len - 1))
  const resultSet = new Set<string>()
  permutationsExceptLastChar.forEach((permutation) => {
    for (let i = 0, len = permutation.length; i <= len; i++) {
      resultSet.add(
        permutation.slice(0, i) +
          lastChar +
          permutation.slice(i)
      )
    }
  })
  return resultSet
}
