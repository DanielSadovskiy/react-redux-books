export const sortBy = (sort) => ({
    type: "SORT_BY",
    payload: sort
})
export const setQuery = (query) => ({
    type: "SET_QUERY",
    payload: query
})
export const searchBooks = (query) => ({
    type: "SEATCH_BOOKS",
    payload: query
})