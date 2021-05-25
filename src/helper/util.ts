export function hasOwnProperty(obj: any, name: string | Symbol) {
  return {}.hasOwnProperty.call(obj, name)
}

/**
 * 获得 [floor, ceiling] 区间内的
 * @param floor
 * @param ceiling
 * @returns
 */
export function getRandom(floor: number, ceiling: number) {
  return floor + Math.floor(Math.random() * (ceiling - floor + 1))
}
