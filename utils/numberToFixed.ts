export const numberToFixed = (num: string | number, toFixed = 3) => {
  if (!num) return '0'
  if (isNaN(parseFloat(`${num}`))) return '0'
  return parseFloat(`${num}`).toFixed(toFixed).replace(/\.?0+$/, '')
}
