const initialState = {
    isLoading: false,
    books: [],
    sortedItem: 'all'
};
export const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                books: [...state.books,
                action.payload
                ]
            }
        case 'SORT_BY':
            return {
                ...state,
                books: [...state.books],
                sortedItem : action.payload
            }
        case 'SET_BOOKS':
            return {
                ...state,
                books: action.payload,
                isLoading: true
            };
        default:
            return state;
    }
}