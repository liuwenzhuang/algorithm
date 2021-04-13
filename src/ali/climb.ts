export function climb(n: number) {
  if (n <= 0) {
    throw new Error('n > 0')
  }
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  return climb(n - 1) + climb(n - 2)
}

export function otherClimb(n: number) {
  if (n <= 0) {
    throw new Error('n > 0')
  }
  const arr = new Array(n + 1).fill(0)
  arr[1] = 1
  arr[2] = 2
  for (let i = 3; i < n + 1; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  return arr[n]
}
