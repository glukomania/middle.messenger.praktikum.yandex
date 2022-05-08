const isObject = (value: unknown): boolean => {
 const type = typeof value
 return null !== value && type === 'object' && !Array.isArray(value)
}

export const isObjectEqual = (value: object, compare: object): boolean => {
 if (isObject(value) && isObject(compare)) {
  let result = true
  for (const item in value) {
   if (isObject(value[item])) {
    result = isObjectEqual(value[item], compare[item])
   } else {
    const property = value[item]
    const compared = compare[item]
    if (Array.isArray(property) && Array.isArray(compared)) {
     if (property.length !== compared.length) {
      result = false
     } else {
      const merge = property.filter((v, i) => v !== compared[i])
      if (merge.length) {
       result = false
      }
     }
    } else {
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
