import { REGISTER_SUCCESS, REGISTER_FAILURE, AUTH_ERROR, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE } from './constType'
import { setAlert } from './alert'
import API from '../api'
import setAuthToken from '../util/setAuthToken'


// Load user 
export const loadUser = ( ) => async dispatch=> {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    
    const config = {
        headers : {
            'x-auth-token': localStorage.token
        }
    }
    try {
        const res = await API.get('/api/auth', config)
        console.log(res)
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// Register User
export const register =  ({ name, email, password })=> async dispatch=> {
    const config = {
        headers: {
            'Constent-Type': 'application/json'
        }
    }
    const body = { name, email, password }

    try {
        const res = await API.post('api/user', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        // dispatch(loadUser())
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: REGISTER_FAILURE,
        })
    }
}

// Login User
export const login =  ({ email, password })=> async dispatch=> {
    const config = {
        headers: {
            'Constent-Type': 'application/json'
        }
    }
    const body = { email, password }

    try {
        const res = await API.post('api/auth/login', body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())

    } catch (error) {
        console.log(error)
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

// Lougout / Clear Profile
export const logout = ( ) => dispatch => {
    dispatch({  type: CLEAR_PROFILE })
    dispatch({  type: LOGOUT })
    
}