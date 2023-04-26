export const decimalCount = (num: any) => {
  // Convert to String
  const numStr = `${num}`
  // Check if string contains decimal
  const decimalIndex = numStr.indexOf('.')
  return decimalIndex === -1 ? 0 : numStr.length - decimalIndex - 1
}
