const initialState = {
    searchQuery: '',
    sortedItem: 'all'
};
export const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SORT_BY':
            return {
                ...state,
                sortedItem : action.payload
            }
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery : action.payload
            }
            
        default:
            return state;
    }
}