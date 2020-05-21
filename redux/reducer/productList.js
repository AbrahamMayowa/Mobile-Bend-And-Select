import {
    GENERAL_PRODUCT_LIST_FAIL,
    GENERAL_PRODUCT_LIST_SUCCESS,
    GENERAL_PRODUCT_LIST_START,
} from '../actions/generalAction'

import {LOAD_MORE_SUCCESS, LOAD_MORE_START} from '../actions/loadMore'

import {CHECK_INTERNET} from '../actions/internetConnection'

const initialState = {
    products: [],
    currentPage: null,
    pages: null,
    loading: false,
    moreLoading: false,
    error: '',
    internetConnected: true

}

export default productLits = (state = initialState, action)=>{
    const payload = action.payload
    switch(action.type){
        case LOAD_MORE_START:
            return {
                ...state,
                moreLoading: true,
            }
        case LOAD_MORE_SUCCESS:
            return{
                ...state,
                moreLoading: false,
                currentPage: payload.currentPage,
                products: state.products.concat(payload.allGoods)
            }
        case CHECK_INTERNET:
            return {
                ...state,
                internetConnected: payload
            }
        case GENERAL_PRODUCT_LIST_START:
            return {
                ...state,
                loading: true
            }
        
        case GENERAL_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload.allGoods,
                currentPage: payload.currentPage,
                pages: payload.pages,
            }

        case GENERAL_PRODUCT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        default:
            return state
    }
}