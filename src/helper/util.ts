export function hasOwnProperty(obj: any, name: string | Symbol) {
  return {}.hasOwnProperty.call(obj, name)
}
