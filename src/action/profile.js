import { setAlert } from './alert';
import API from '../api'
import {
    GET_PROFILE,
    UPDATE_PROFILE,
    PROFILE_ERROR
} from './constType'

// Get current user's profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const config = {
            headers : {
                'x-auth-token': localStorage.token
            }
        }
        const res = await API.get('api/profile/me', config)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// create or update  a profile
export const CreateProfile = (formData, history, edit=false)=> async dispatch=> {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        }

        const res = await API.post('/api/profile', formData, config)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

        dispatch(setAlert(edit? 'Profile Updated' : 'Profile Created', 'success'))
        
        if(!edit){
            history.push('/dashboard')
        }
    } catch(error){
        console.log(error)
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })

    }
}

// Add experience
export const addExperience = (formData, history)=> async dispatch=> {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        }

        const res = await API.put('/api/profile/experience', formData, config)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Experience Addded', 'success', ))
        
        history.push('/dashboard')
    } catch(error){
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })

    }
}

// Add Education
export const addEducation = (formData, history)=> async dispatch=> {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        }

        const res = await API.put('/api/profile/education', formData, config)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Education Addded', 'success', ))
        
        history.push('/dashboard')
    } catch(error){
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })

    }
}