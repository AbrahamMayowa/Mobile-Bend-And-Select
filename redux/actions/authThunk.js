import {
    userLoginFail, 
    userLoginStart, 
    userLoginSuccess,
    userLogout,
    userRefreshAuth,
    userSignupFail,
    userSignupStart,
    userSignupSuccess,
} from './auth'

export const userSignup =(isSeller, email, phoneNumber, image, username, password)=>{
    return async dispatch =>{
        let url
        if(isSeller){
            url = 'http://localhost:4000/api/signup/seller'
        }else{
            url = 'http://localhost:400/api/signup/buyer'
        }

        try{
            dispatch(userSignupStart())
            const formData = new FormData()
            formData.append('email', email)
            formData.append('phoneNumber', phoneNumber)
            formData.append('image', image)
            formData.append('username', username)
            formData.append('password', password)
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            })

            if(!response.ok){
                if(response.status === 422){
                    throw new Error('Invalid request')
                }
                throw new Error('Server error')
            }

            const resData = await response.json()
            dispatch(userSignupSuccess(resData))
        }catch(error){
            dispatch(userSignupFail(error))
            console.log(error)
        }


    }
}


export const userLogin = (isSeller, email, password)=>{
    return async dispatch =>{
        dispatch(userLoginStart())
        try{
            let url;
            if(isSeller){
                url = 'http://localhost:4000/api/login/seller'
            }else{
                url = 'http://localhost:4000/api/login/buyer'
            }

            const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                }) 
            })

            if(!response.ok){
                if(response.status === 422){
                    throw new Error('email or password is invalid')
                }
                throw new Error('Server error')
            }
            const resData = await response.json()
            dispatch(userLoginSuccess(resData))
        }catch(error){
            dispatch(userLoginFail())
        }
    }
}


export const userLogoutDispatch = (token)=>{
    // the auth reducer will be clear
    return dispatch =>{
        dispatch(userLogout())
        fetch('http://localhost:4000/api/logout', {
            method: 'PUT',
            headers:{
                Authorization: 'Bearer ' + token
             }
        })
    }
}

export const userRefreshDispatch = (userId, refreshToken, userStatus) =>{
    return async dispatch =>{

        try{
            const response = await fetch('http://localhost:4000/api/refreshtoken', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    refreshToken,
                    userStatus
                })
            })

            if(!response.ok){
                throw new Error('Authentication fails')
            }

            const resData = await response.json()
            dispatch(userRefreshAuth(resData))
        }catch(error){
            console.log(error)
            // the user is automatically log out
            dispatch(userLogout())
        }

    }
}