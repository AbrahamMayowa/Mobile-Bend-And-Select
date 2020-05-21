// user signup action type
export const USER_SIGNUP_START = "USER_SIGNUP_START";
export const USER_SIGNUP_FAIL = "USER_SIGNUP_FAIL";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_FAIL";


// user login action type
export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL"

// user log out
export const USER_LOGOUT = "USER_LOGOUT"


// refreshToken 
//if it fails userLogout action wiil be dispatched
export const USER_REFRESH_AUTH = 'USER_REFRESH_AUTH'


export const userRefreshAuth = (payload)=>{
    return{
        type: USER_REFRESH_AUTH,
        payload
    }
}

export const userLogout = ()=>{
    return {
        type: USER_LOGOUT
    }
}


export const userLoginStart = ()=>{
    return {
        type: USER_LOGIN_START
    }
}

export const userLoginSuccess = (payload)=>{
    return{
        type: USER_LOGIN_SUCCESS,
        payload
    }
}

export const userLoginFail = (error)=>{
    return{
        type: USER_LOGIN_FAIL,
        payload: error
    }
}


export const userSignupStart = ()=>{
    return {
        type: USER_SIGNUP_START
    }
}



export const userSignupSuccess =(payload)=>{
    return {
        type: USER_SIGNUP_SUCCESS,
        payload
    }
}

export const userSignupFail = (error)=>{
    return{
        type: USER_SIGNUP_FAIL,
        payload: error
    }
}

