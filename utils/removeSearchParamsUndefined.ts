export const removeSearchParamsUndefined = (o: any) =>
  Object.entries(o)
    .filter(([, val]) => val !== undefined && val !== null)
    .reduce((result: any, [key, val]) => {
      result[key] = val
      return result
    }, {})