import {
    deleteProduct,
    adminHomepageStart,
    adminHomepageFail,
    adminHomepageSuccess,
    addEditProductFail,
    addEditProductStart,
    addEditProductSuccess,

} from './sellerAdmin'

const url = 'http://localhost:4000/api/admin/'

export const addEditDispatch = (token, name, category, condition, price, image, location, description, productId=null)=>{
    return async dispatch =>{
        try{
            dispatch(addEditProductStart())
            const formData = new FormData()
            let fullUrl;
            if(productId){
                fullUrl = url + 'product-edit'
                //set productId
                formData.append('productId', productId)
            }else{ 
                fullUrl = url + 'add-product'
            }

            formData.append('image', image)
            formData.append('name', name)
            formData.append('category', category)
            formData.append('condition', condition)
            formData.append('price', price)
            formData.append('location', location)
            formData.append('description', description)

            const response = await fetch(fullUrl, {
                // if productId the method is put
                method: productId ? 'PUT' : 'POST',
                headers: {
                    Authorization: 'Bearer ' + token
                },
                body: formData
            })
            if(!response.ok){
                if(response.status === 403){
                    throw new Error('Not authorized')
                }
                throw new Error('Invalid request')
            }

            const resData = await response.json()
            dispatch(addEditProductSuccess(resData))
        }catch(error){
            console.log(error)
            dispatch(addEditProductFail(error))
        }
    }
}

export const adminHomeDispatch = (token) =>{
    return async dispatch =>{
        try{
            dispatch(adminHomepageStart())
            const response = await fetch(url + 'homepage', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            const resData = await response.json()
            dispatch(adminHomepageSuccess(resData))
        }catch(error){
            console.log(error)
            dispatch(adminHomepageFail(error))
        }
    }
}


export const deleteDispatch = (token, productId)=>{
    return dispatch =>{
        try {
            dispatch(deleteProduct(productId))
            fetch(url + 'product-delete', {
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId
                })
            })
        } catch (error) {
            
        }
    }
}