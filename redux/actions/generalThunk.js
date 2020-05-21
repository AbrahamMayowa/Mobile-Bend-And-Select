import {
    generalProductListFail,
    generalProductListStart,
    generalProductListSuccess,
    productDetailsFail,
    productDetailsStart,
    productDetailsSuccess,
    searchQueryFail,
    searchQueryStart,
    searchQuerySuccess
} from './generalAction'

import {productListLoadMoreSuccess, productListLoadMoreStart} from './loadMore'

const url = 'http://localhost:4000/api/'

export const generalProductListDispatch = (currentPage, loadMore=false)=>{
    return async dispatch =>{
        try{
            if(loadMore){
                dispatch(productListLoadMoreStart())
            }else{
                dispatch(generalProductListStart())
            }
            const response = await fetch( url + currentPage, {
                method: 'GET',
            })
            
            if(!response.ok){
                if(response.status === 404){
                    throw new Error('Product not found')
                }
                throw new Error('Server error')
            }
            const resData = await response.json()
            
            if(loadMore){
                dispatch(productListLoadMoreSuccess(resData))
            }else{ dispatch(generalProductListSuccess(resData))}
        }catch(error){
            console.log(error)
            dispatch(generalProductListFail(error))
        }
    } 
}


export const detailsDispatch = (productId, token)=>{
    return async dispatch=>{
        try {
            dispatch(productDetailsStart())
            const response = await fetch(url + `product/${productId}`, {
                method: 'GET',
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
            console.log(response)
            if(!response.ok){
                if(response.status === 404){
                    throw new Error('Product not found')
                }
                throw new Error('Server error')
            }

            const resData = await response.json()
            console.log(resData)
            dispatch(productDetailsSuccess(resData))
        } catch (error) {
            console.log(error)
            dispatch(productDetailsFail(error))
        }
    }
}

export const searchQuery =(query, queryValue, pageParams)=>{
    return async dispatch =>{
        dispatch(searchQueryStart())
        try {
            const response = await fetch(url + `search/${pageParams}/?${query}=${queryValue}`, {
                method: 'GET'
            })
            if(!response.ok){
                throw new Error('Server error')
            }
            const resData = await response.json()
            dispatch(searchQuerySuccess(resData))
        } catch (error) {
            console.log(error)
            dispatch(searchQueryFail(error))
        }
    } 
}