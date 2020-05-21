export const ADMIN_HOMEPAGE_START = "ADMIN_HOMEPAGE_START"
export const ADMIN_HOMEPAGE_SUCCESS = "ADMIN_HOMEPAGE_SUCCESS"
export const ADMIN_HOMEPAGE_FAIL = "ADMIN_HOMEPAGE_FAIL"


export const ADD_EDIT_PRODUCT_START = "ADD_EDIT_PRODUCT_START"
export const ADD_EDIT_PRODUCT_SUCCESS = "ADD_EDIT_PRODUCT_SUCCESS"
export const ADD_EDIT_PRODUCT_FAIL = "ADD_EDIT_PRODUCT_FAIL"

export const DELETE_PRODUCT = "DELETE_PRODUCT"

export const deleteProduct = (productId)=>{
    return{
        payload: productId
    }
}


export const addEditProductStart = ()=>{
    return{
        type: ADD_EDIT_PRODUCT_START
    }
}

export const addEditProductSuccess =payload =>{
    return{
        type: ADD_EDIT_PRODUCT_SUCCESS,
        payload
    }
}

export const addEditProductFail = error=>{
    return{
        type: ADD_EDIT_PRODUCT_FAIL,
        payload: error
    }
}




export const adminHomepageStart =()=>{
    return{
        type: ADMIN_HOMEPAGE_START
    }
}

export const adminHomepageSuccess =(payload)=>{
    return{
        type: ADMIN_HOMEPAGE_SUCCESS,
        payload
    }
}

export const adminHomepageFail =(error)=>{
    return{
        type: ADMIN_HOMEPAGE_FAIL,
        payload: error
    }
}