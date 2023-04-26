export const numberWithCommas = (num: string | number) => {
  if (isNaN(parseFloat(`${num}`))) {
    return ''
  }
  let numArr = parseFloat(`${num}`).toString().split('.')
  numArr[0] = numArr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return numArr.join('.')
}
