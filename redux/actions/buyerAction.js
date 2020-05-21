const PRODUCT_REVIEW_START = 'PRODUCT_REVIEW_START'
const PRODUCT_REVIEW_FAIL = "PRODUCT_REVIEW_FAIL"

//wishlist for both adding and removing product from wishlist
const PRODUCT_WISHLIST_START = "PRODUCT_WISHLIST_START"
const PRODUCT_WISHLIST_FAIL = "PRODUCT_WISHLIST_FAIL"


// actionBoolen is true or false for adding or removing product
const productWishlistStart = (productId, actionBoolean)=>{

    return{
        type: PRODUCT_WISHLIST_START,
        payload: {productId, actionBoolean}
    }
}

const productWishlistFail = (error, productId)=>{
    //productId will be removed if exist or added non-exist
    return{
        type: PRODUCT_WISHLIST_FAIL,
        payload: {error, productId}
    }
}


const productReviewStart = (productId, reviewValue)=>{
    return{
        type: PRODUCT_REVIEW_START,
        payload: {productId, reviewValue}
    }
}

const productReviewFail =(error, productId, reviewValue)=>{
    // when failed, the above action will be reversed and the error message will be display in alert
    return {
        type: PRODUCT_REVIEW_FAIL,
        payload: {error, productId, reviewValue}
    }
}


