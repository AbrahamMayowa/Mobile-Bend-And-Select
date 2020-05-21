export const LOAD_MORE_START = 'LOAD_MORE_START'
export const LOAD_MORE_SUCCESS = "LOAD_MORE_SUCCESS"

export const productListLoadMoreSuccess =(payload)=>{
    return{
        type: LOAD_MORE_SUCCESS,
        payload
    }
}

export const productListLoadMoreStart =()=>{
    return{
        type: LOAD_MORE_START,
    }
}