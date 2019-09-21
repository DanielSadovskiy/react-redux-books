export const addToCart = (book) => ({
    type: "ADD_BOOK_TO_CART",
    payload: book
})
export const removeFromCart = (id) => ({
    type: "REMOVE_BOOK_FROM_CART",
    payload: id
})