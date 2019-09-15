const initialState = {
    books: [
        {
            id: 0,
            title: "Hello World"
        }
    ],
    ids:[]
};
export const books = (state = initialState,action) =>{
    switch(action.type){
        case 'ADD_BOOK':
            return {
                ...state,
                books : [...state.books,
                action.payload
                ]
            }
        case 'SET_BOOKS':
            return {
                ...state,
                books: action.payload
            }
        default:
             return state;
    }
}