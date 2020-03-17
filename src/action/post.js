import { GET_POST, POST_ERROR } from "./constType";
import API from "../api";
import { alert } from "./alert"

// Get Posts
export const getPosts = () => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        }
        const res = await API.get('/api/post', config)
        dispatch({
            type: GET_POST,
            payload: res.data
        })
        
    } catch (error) {
        console.error(error)
        // if(errors){
        //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        // }

        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
        
    }
}