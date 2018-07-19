export const reverseObject = (obj) => {
  const newObj = {}
  const keys = Object.keys(obj)
  keys.forEach(key => {
    newObj[obj[key]] = key
  })

  return newObj
}
