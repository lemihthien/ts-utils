export const numberFormatShort = (num: number): string => {
  const absNum = Math.abs(num)
  const suffixes = ['', 'K', 'M', 'B', 'T']
  const suffixNum = Math.floor((absNum.toString().length - 1) / 3)

  let shortNum = ''
  if (absNum >= 1000 && absNum < 10000) {
    shortNum = (absNum / 1000).toFixed(0)
  } else if (absNum >= 10000) {
    shortNum = (absNum / 1000).toFixed(1)
  } else {
    shortNum = absNum.toFixed(0)
  }

  if (shortNum.slice(-2) === '.0') {
    shortNum = shortNum.slice(0, -2)
  }

  return `${num >= 0 ? '' : '-'}${shortNum}${suffixes[suffixNum]}`
}
