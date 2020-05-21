import {
    USER_SIGNUP_FAIL, USER_SIGNUP_START, USER_SIGNUP_SUCCESS,
    USER_LOGIN_FAIL, USER_LOGIN_START, USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REFRESH_AUTH,
} from '../actions/auth'


import {
    PRODUCT_WISHLIST_START, PRODUCT_WISHLIST_FAIL
} from '../actions/buyerAction'



const initialState = {
    isSeller: null,
    user: {},
    token: null,
    refreshToken: '',
    expirationDate: null,
    loading: false,
    error: ''
}


export default authReducer = (state=initialState, action)=>{
    const payload = action.payload
    switch (action.type) {
        case USER_SIGNUP_START:
        case USER_LOGIN_START:
            return{
                ...state,
                loading: true
            }
        
        case USER_SIGNUP_SUCCESS:
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isSeller: payload.isSeller,
                user: payload.user,
                token: payload.token,
                refreshToken: payload.refreshToken,
                expirationDate: payload.expirationDate,
                loading: false
            }

        case USER_SIGNUP_FAIL:
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error.message
            }

        case USER_LOGOUT:
            return initialState
        
        case USER_REFRESH_AUTH:
            // when this failed, USER_LOGOUT case will be executed
            return {
                ...state,
                token: payload.token,
                expirationDate: payload.expirationDate
            }

        case PRODUCT_WISHLIST_START:
            let updatedWishlist;
            const stateWishlist = [...state.user.wishList]
            //if actionBoolean's value is true, productId added to array
            if(payload.actionBoolean){
                updatedWishlist = stateWishlist.push({goodsId: payload.productId})  
            }else{
                updatedWishlist = stateWishlist.filter(item => {
                    return item.goodsId.toString() !== payload.productId.toString()
                })
            }
            return {
                ...state,
                user: {
                    ...state.user,
                    wishlist: updatedWishlist
                }
            }

        case PRODUCT_WISHLIST_FAIL:
            let copiedList = [...state.user.wishList]
            let newList;
            const productIndex = copiedList.findIndex(item => item.goodsId.toString() === payload.productId.toString())
            if(productIndex > -1){
                newList = copiedList.filter(item => {
                    return item.goodsId.toString() !== payload.productId.toString()
                })
            }else{
                newList = copiedList.push({goodsId: payload.productId})
            }
            return{
                ...state,
                wishList: newList,
                error: payload.error.message

            }

        default:
            return {...state}
    }
}