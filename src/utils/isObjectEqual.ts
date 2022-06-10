const isObject = (value: unknown): boolean => {
 const type = typeof value
 return null !== value && type === 'object' && !Array.isArray(value)
}

export const isObjectEqual = (value: object, compare: object): boolean => {
 if (isObject(value) && isObject(compare)) {
  let result = true
  for (const item in value) {
    // @ts-expect-error
   if (isObject(value[item])) {
     // @ts-expect-error
    result = isObjectEqual(value[item], compare[item])
   } else {
     // @ts-expect-error
    const property = value[item]
    // @ts-expect-error
    const compared = compare[item]
    if (Array.isArray(property) && Array.isArray(compared)) {
     if (property.length !== compared.length) {
      result = false
     } else {
      const merge = property.some((v, i) => v !== compared[i])
      // @ts-expect-error
      if (merge.length) {
       result = false
      }
     }
    } else {
      // @ts-expect-error
     if (value[item] !== compare[item]) {
      result = false
     }
    }
   }
  }
  return result
 }
 return value === compare
}

export default isObjectEqual
