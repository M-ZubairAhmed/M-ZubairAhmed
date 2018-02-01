export const truncrateString = (str, limit) => {
  if (str.length > limit) {
    return `${str.slice(0, limit - 3)}...`
  }
  return str
}
