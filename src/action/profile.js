import { setAlert } from './alert';
import API from '../api'
import {
    GET_PROFILE,
    GET_PROFILES,
    UPDATE_PROFILE,
    PROFILE_ERROR,
    ACCOUNT_DELETED,
    CLEAR_PROFILE,
    GET_REPOS,
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
        console.error(error)
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// Get all profiles
export const getProfiles = () => async dispatch => {
    try {
        const res = await API.get('api/profile/profiles')
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (error) {
        console.error(error)
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// Get profile by ID
export const getProfileById = (userId) => async dispatch => {
    try {
        const res = await API.get(`api/profile/${userId}`)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        console.error(error)
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
    }
}

// Get github-repos
export const getGithubRepos = (username) => async dispatch => {
    try {
        const res = await API.get(`api/profile/github/${username}`)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    } catch (error) {
        console.error(error)
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

// Delete Experience
export const deleteExperience = ( id )=> async dispatch=> {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token
        }
    }
    try {
        const res = await API.delete(`api/profile/experience/${id}`, config)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Experience deleted successfully', 'success'))
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status} 
        })
        
    }
}

// Delete Eduaction
export const deleteEducation = ( id )=> async dispatch=> {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token
        }
    }
    try {
        const res = await API.delete(`api/profile/education/${id}`, config)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Education deleted successfully', 'success'))
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status} 
        })
        
    }
}

// Delete Account
export const deleteAccount = ( id )=> async dispatch=> {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token
        }
    }

    if(window.confirm('Are You Sure? This can NOT be Undone')){
        try {
            await API.delete(`api/profile`, config)
            dispatch({ type: CLEAR_PROFILE })
            dispatch({ type: ACCOUNT_DELETED })

            dispatch(setAlert('your Account has been permanantly deleted', 'success'))
        } catch (error) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: error.response.statusText, status: error.response.status} 
            })
            
        }
    }
}