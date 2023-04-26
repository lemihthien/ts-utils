export const removeEmptyFields = <T extends Record<string, any>>(obj: T): T => {
  let changed = false
  const newObj = {} as T
  for (const key in obj) {
    const value = obj[key]
    if (value !== undefined && value !== null && value !== '') {
      if (typeof value === 'object' && !Array.isArray(value)) {
        const innerObj = removeEmptyFields(value)
        if (Object.values(innerObj).some(Boolean)) {
          newObj[key] = innerObj
          changed = true
        }
      } else if (Array.isArray(value)) {
        const filteredArray = value.filter((item: any) => item !== undefined && item !== null && item !== '')
        if (filteredArray.length > 0) {
          newObj[key] = filteredArray
          changed = true
        }
      } else {
        newObj[key] = value
      }
    } else {
      changed = true
    }
  }
  return changed ? newObj : obj
}
