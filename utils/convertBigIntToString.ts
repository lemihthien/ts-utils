export const convertArrayBigIntToString = <T extends Record<string, any>>(arr: T[]): T[] => {
  return arr.map((item) => {
    const newItem = { ...item }
    for (const key in newItem) {
      if (typeof newItem[key] === 'bigint') {
        newItem[key] = newItem[key].toString()
      }
    }
    return newItem
  })
}

export const convertObjectBigIntToString = <T extends Record<string, any>>(obj: T): Object => {
  const newItem = { ...obj }
  for (const key in newItem) {
    if (typeof newItem[key] === 'bigint') {
      newItem[key] = newItem[key].toString()
    }
  }
  return newItem
}
