// remove more symbol in text (build description for SEO)
export const cleanText = (text?: string) => {
  let valueText = text ?? ''
  // eslint-disable-next-line
  valueText = valueText.replace(/['"]+/g, '')
  valueText = valueText.replace(/  +/g, ' ').trim()
  return valueText
}
