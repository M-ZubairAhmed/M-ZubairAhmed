export const truncateText = (text = '', limit = 18) => {
  if (text.trim().length === 0) {
    return ''
  } else {
    if (text.length <= limit) {
      return text
    } else {
      return `${text.slice(0, limit)}...`
    }
  }
}
