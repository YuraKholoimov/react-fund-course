export const getPageCount = (totalPage, limit) => {
    return Math.ceil(totalPage / limit)
}