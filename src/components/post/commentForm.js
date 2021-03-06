import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../action/post'

const CommentForm = ({postId, addComment}) => {
    const [text, setText] = useState('')
    return (
        <div>
            <div className="my-3">
                <div className="bg-danger text-white py-1 px-2">
                    <h4> Leave a comment... </h4>
                </div>
                <form  className="my-1 form w-100" onSubmit={e=>{
                    e.preventDefault();
                    addComment(postId, {text});
                    setText('')
                }}>
                    <textarea 
                        className="form-control rounded my-1 border-danger"
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Create a post"
                        value={text}
                        onChange={e => setText(e.target.value)}>
                    </textarea>
                    <input type="submit" className="btn btn-dark btn-sm rounded-0" />
                </form>
            </div>    
        </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default connect(null, {addComment}) (CommentForm)
