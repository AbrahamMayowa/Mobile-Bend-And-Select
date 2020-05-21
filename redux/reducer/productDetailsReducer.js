import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_START,
    PRODUCT_DETAILS_SUCCESS
} from '../actions/generalAction'

import {
    ADD_EDIT_PRODUCT_FAIL,
    ADD_EDIT_PRODUCT_START, 
    ADD_EDIT_PRODUCT_SUCCESS
} from '../actions/sellerAdmin'

import {
    PRODUCT_REVIEW_START,
    PRODUCT_REVIEW_FAIL
} from '../actions/buyerAction'


const initialState = {
    product: {
        review: {
            reviewAverage: {},
            reviewRanking: {}
        },
        goodsSeller: {}
    },
    wishlist: false,
    checkReview: false,
    relatedProducts: [],
    loading: false,
    error: '',
    // when true, navigate to details navigation
    addEditSuccess: false,
}

export default productDetailsReducer = (state=initialState, action)=>{
    const payload = action.payload
    switch (action.type) {
        case PRODUCT_REVIEW_START:
            const review = state.product.review
            const updatedSum = review.reviewAverage.sum + payload.reviewValue
            const updatedLengthCount = review.reviewAverage.lengthCount + 1
            return{
                ...state,
                product: {
                    ...state.product,
                    review: {
                        ...state.product.review,
                        reviewRanking: {
                            ...state.product.review.reviewRanking,
                            [payload.reviewValue]: review.reviewRanking[payload.reviewValue] + 1
                        },
                        reviewAverage: {
                            ...state.product.review.reviewAverage,
                            sum: updatedSum,
                            lengthCount: updatedLengthCount,
                            averageScore: Math.trunc(updatedSum / updatedLengthCount)
                        }

                    }

                },
                checkReview: true
            }


        case PRODUCT_REVIEW_FAIL:
            return{
                ...state,
                // user will able to review the product again
                checkReview: false
            }

        case PRODUCT_DETAILS_START:
            return{
                ...state,
                loading: true
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: payload.productDetails,
                wishlist: payload.wishlist,
                checkReview: payload.checkReview,
                addEditSuccess: false,
                relatedProducts: payload.relatedProducts
            }
        case PRODUCT_DETAILS_FAIL:
            return{
                ...state,
                loading: false,
                error: payload.error.message,
                addEditSuccess: false
            }
        case ADD_EDIT_PRODUCT_START:
            return {
                ...state,
                loading: true,
                addEditSuccess: false
            }
        case ADD_EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                addEditSuccess: true,
                product: payload.goods,
                wishlist: false,
                checkReview: false
            }
        case ADD_EDIT_PRODUCT_FAIL:
            return{
                ...state,
                loading: false,
                addEditSuccess: false,
                error: payload.error.message,
                wishlist: false,
                checkReview: false
            }
        default:
            return state
    }
}