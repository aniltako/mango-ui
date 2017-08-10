export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

const ROOT_URL = window.location.hostname === 'localhost' ? 'http://localhost:8090/api/' : 'http://localhost:8090/api/'

export function registerUser(user) {
    return function (dispatch) {
        dispatch({type: REGISTER_USER, loading: true})

        return fetch(ROOT_URL+'user/signUp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
      
                email: user.email,
                password: user.password
            })
        })
        .then((response) => response.json())
        .then((json) => {
            if(json.token){
                dispatch(registerUserSuccess(json))

            }else if( json.error){
                dispatch(registerUserFailure(json))
            }
        })
        .catch((error) => {
            dispatch(registerUserFailure(error))
        })
    }
}

export function registerUserSuccess(json) {
    return {
        type: REGISTER_USER_SUCCESS, loading: false,
        data: json
    }
}

export function registerUserFailure(error) {
    return {
        type: REGISTER_USER_FAILURE, loading: false,
        error: error
    }
}

export const login = (username, password) => {
     return function (dispatch) {

        dispatch({type: LOGIN, loading: true})

        return fetch(ROOT_URL+'auth/signIn', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
      
                username: username,
                password: password
            })
        })
        .then((response) => response.json())
        .then((json) => {
            if(json.token){
                dispatch(loginSuccess(json))

            }else if( json.error){
                dispatch(loginFailure(json))
            }
        })
        .catch((error) => {
            dispatch(loginFailure(error))
        })
    }
}

export function loginSuccess(json) {
    return {
        type: LOGIN_SUCCESS, loading: false,
        data: json
    }
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE, loading: false,
        error: error
    }
}
