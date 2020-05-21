import {productWishlistStart, productWishlistFail, productReviewStart, productReviewFail} from './buyerAction'


export const wishlistDispatch = (goodsId, token, booleanValue)=>{
    return async dispatch =>{
        try{
            dispatch(productWishlistStart(goodsId, booleanValue))
            const response = await fetch(`http://localhost:4000/api/wishlist/${goodsId}`, {
                method:"POST",
                headers: {
                    Authorization: 'Bearer ' + token, 
                }
            })

            if(!response.ok){
                if(response.status === 422){
                    throw new Error('Not authorized')
                }
                throw new Error('Product not found')
            }
        }catch(error){
            console.log(error)
            dispatch(productWishlistFail(error, goodsId))
        }

    } 
}


export const reviewDispatch = (productId, reviewValue, token)=>{
    return async dispatch =>{
        try{
            dispatch(productReviewStart(productId, reviewValue))
            const response = await fetch('http://localhost:4000/api/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                body: JSON.stringify({
                    productId,
                    reviewValue
                })
            })

            if(!response.ok){
                if(response.status === 404){
                    throw new Error('Product not found')
                }
                throw new Error('Not authenticated')
            }
        }catch(error){
            console.log(error)
            dispatch(productReviewFail(error, productId, reviewValue))
        }

    }
}
