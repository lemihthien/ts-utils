export const copyText = (text: string, callback?: () => void) => {
  if (navigator.clipboard && navigator.permissions) {
    navigator.clipboard.writeText(text).then(callback)
    return
  }

  if (!document.queryCommandSupported('copy')) {
    return
  }

  const ele = document.createElement('textarea')
  ele.value = text
  document.body.appendChild(ele)
  ele.select()
  document.execCommand('copy')
  document.body.removeChild(ele)
  callback?.()
}
