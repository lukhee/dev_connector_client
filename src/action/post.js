import { GET_POSTS, 
    GET_POST, 
    POST_ERROR, 
    UPDATE_LIKES, 
    ADD_POST,  
    ADD_COMMENT,
    REMOVE_COMMENT,
    DELETE_POST } from "./constType";
import API from "../api";
import { setAlert } from "./alert"

// Get Posts
export const getPosts = () => async dispatch => {
    try {
        const config = {
            headers : {
                'x-auth-token': localStorage.token
            }
        }
        const res = await API.get('/api/post', config)
        dispatch({
            type: GET_POSTS,
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

// Add like
export const addLike = (id) => async dispatch => {
    try {
        const config = {
            headers : {
                'x-auth-token': localStorage.token
            }
        }
        console.log(config)
        const res = await API.put(`/api/post/like/${id}`, null, config)
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        })
        
    } catch (error) {
        console.error(error)

        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
        
    }
}

// remove like
export const removeLike = (id) => async dispatch => {
    console.log("token" + localStorage.token)
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        }
        const res = await API.put(`/api/post/unlike/${id}`, null, config)
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        })
        
    } catch (error) {
        console.error(error)

        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
        
    }
}

// Delete Post
export const deletePost = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        }
        await API.delete(`/api/post/${id}`, config)
        dispatch({
            type: DELETE_POST,
            payload: id
        })
        
        dispatch(setAlert("Post Remove", "success"))
    } catch (error) {
        console.error(error)

        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
        
    }
}

// Add Post
export const addPost = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        }
        const res = await API.post(`/api/post`, formData, config)
        dispatch({
            type: ADD_POST,
            payload: res.data
        })

        dispatch(setAlert("Post Created", "success"))
    } catch (error) {
        console.error(error)

        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
        
    }
}

// Get Post
export const getPost = (id) => async dispatch => {
    try {
        const config = {
            headers : {
                'x-auth-token': localStorage.token
            }
        }
        const res = await API.get(`/api/post/${id}`, config)
        dispatch({
            type: GET_POST,
            payload: res.data
        })
        console.log(res.data)
        
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
        
    }
}

// Add Comment
export const addComment = (postId, formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        }
        const res = await API.put(`/api/post/comment/${postId}`, formData, config)
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })

        dispatch(setAlert("Comment Added", "success"))
    } catch (error) {
        console.error(error)

        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
        
    }
}

// Delete Comment
export const deleteComment = (postId, commentId) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        }
        await API.delete(`/api/post/comment/${postId}/${commentId}`, config)
        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId
        })

        dispatch(setAlert("Comment Deleted", "success"))
    } catch (error) {
        console.error(error)

        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        })
        
    }
}