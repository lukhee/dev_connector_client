import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteComment } from '../../action/post'

const CommentItem = ({ deleteComment, auth, postId, comment: { _id, text, name, avatar, user, date}}) => {
    return (
        <div className="post bg-white p-2 my-1 border row m-0">
            <div className="col-sm-2 col-md-3 text-center my-1">
                <Link to={`/profile/${user}`}>
                    <img src={avatar} className="rounded-circle w-50" alt=''/>
                    <h5 className="text-capitalize text-danger"> {name} </h5>
                </Link>
            </div>
            <div className="col-sm my-1 align-self-end"> 
                <p className="my-2"> {text} </p>
                <p className='text-muted mb-0'>
                    Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
                {!auth.loading && user === auth.user._id && (
                    <button onClick={e => deleteComment(postId, _id)} type="button" className="btn btn-sm rounded-0">
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
}

 const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, {  deleteComment }) (CommentItem)
