import {
    SEARCH_QUERY_FAIL, 
    SEARCH_QUERY_START,
    SEARCH_QUERY_SUCCESS,
} from '../actions/generalAction'

const initialState  = {
    products: [],
    numberOfProduct: null,
    currentPage: null,
    isFilter: null,
    searchWord: '',
    filter: '',
    pages: null,
    loading: false,
    error: '',
    success: false
}


export default searchReducer = (state=initialState, action)=>{
    const payload = action.payload
    switch(action.type){
        case SEARCH_QUERY_START:
            return {
                ...state,
                loading: true
            }
        case SEARCH_QUERY_SUCCESS:
            return {
                ...state,
                products: payload.products,
                numberOfProduct: payload.numberOfProduct,
                currentPage: payload.currentPage,
                isFilter: payload.isFilter,
                searchWord: payload.searchWord,
                filter: payload.filter,
                pages: payload.pages,
                loading: false,
                success: true
            }
        case SEARCH_QUERY_FAIL:
            return{
                ...state,
                loading: false,
                error: payload.error,
                success: false
            }
        default:
            return state
    }
}