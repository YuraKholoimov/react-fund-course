export const getPageCount = (totalPage, limit) => {
    return Math.ceil(totalPage / limit)
}

export const getPagesArray = (totalPage) => {
    
  const pages = []
  for (let i = 0; i < totalPage; i++) {
    pages.push(i + 1)
  }
  return pages
}