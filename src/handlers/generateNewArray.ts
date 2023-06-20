export const generateNewArray = (length: number) => {
  const newArray = []
  for (let i = 1; i < length + 1; i++) {
    newArray.push(i)
  }
  return newArray
}