export const GENERAL_PRODUCT_LIST_START = "GENERAL_PRODUCT_LIST_START"
export const GENERAL_PRODUCT_LIST_SUCCESS = "GENERAL_PRODUCT_LIST_SUCCESS"
export const GENERAL_PRODUCT_LIST_FAIL = "GENERAL_PRODUCT_LIST_FAIL"

export const PRODUCT_DETAILS_START = "PRODUCT_DETAILS_START"
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS"
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL"


export const SEARCH_QUERY_START = "SEARCH_QUERY_START"
export const SEARCH_QUERY_SUCCESS = "SEARCH_QUERY_SUCCESS"
export const SEARCH_QUERY_FAIL = "SEARCH_QUERY_FAIL"

export const searchQueryStart =()=>{
    return{
        type: SEARCH_QUERY_START
    }
}

export const searchQuerySuccess =(payload)=>{
    return{
        type: SEARCH_QUERY_SUCCESS,
        payload
    }
}


export const searchQueryFail =(error)=>{
    return{
        type: SEARCH_QUERY_FAIL,
        payload: error
    }
}


export const productDetailsStart = ()=>{
    return{
        type: PRODUCT_DETAILS_START
    }
}

export const productDetailsSuccess = (payload)=>{
    return{
        type: PRODUCT_DETAILS_SUCCESS,
        payload
    }
}

export const productDetailsFail = (error )=>{
    return{
        type: PRODUCT_DETAILS_FAIL,
        payload: error
    }
}





export const generalProductListStart = ()=>{
    return {
        type: GENERAL_PRODUCT_LIST_START
    }
}

export const generalProductListSuccess =(payload)=>{
    return{
        type: GENERAL_PRODUCT_LIST_SUCCESS,
        payload
    }
}

export const generalProductListFail =(error)=>{
    return{
        type: GENERAL_PRODUCT_LIST_FAIL,
        payload: error
    }
}

