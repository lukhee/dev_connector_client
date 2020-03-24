import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { addLike, removeLike, deletePost } from '../../action/post'

const PostItem = ({ addLike, removeLike, deletePost, showAction,  auth, post: { _id, text, name, avatar, user, likes, unlikes, comments, date } }) => {
    return (
        <div className="post bg-white p-2 my-1 border row m-0">
            <div className="col-sm-2 col-md-3 text-center my-1">
                <Link to={`/profile/${user}`}>
                    <img className="rounded-circle w-50" src={avatar} alt='' />
                    <h5 className="text-capitalize text-danger"> {name} </h5>
                </Link>
            </div>
            <div className="col-sm my-1">
                <div className="d-flex align-items-start flex-column my-2">
                    <p className={showAction? "truncate" : 'my-2'}>
                        {text}
                    </p>
                    <p className="post-date text-muted mt-auto"> Posted on <Moment format="YYYY/MM/DD">{date}</Moment></p>
                </div>
                {showAction && <Fragment>
                    <button onClick={e => addLike(_id)} type="button" className="btn btn-light btn-sm rounded-0 mr-2"> 
                    <i className="fas fa-thumbs-up mr-2"/>
                    {likes.length > 0 && 
                    <span>{likes.length}</span> }
                    </button>
                    <button onClick={e => removeLike(_id)} type="button" className="btn btn-light btn-sm rounded-0 mr-2"> 
                        <i className="fas fa-thumbs-down mr-2"/>
                        <span>{unlikes}</span>
                    </button>
                    <Link to={`/posts/${_id}`} className="btn btn-danger btn-sm rounded mr-2">
                        Discussion <span className="p-1 rounded bg-white text-danger"> { comments.length } </span>
                    </Link>
                    { !auth.loading && auth.user._id === user && (
                        <button onClick={e => deletePost(_id)} type="button" className="btn btn-light btn-sm text-danger">
                            <i className="fas fa-times" />
                        </button>
                    )}
                    </Fragment>}
            </div>
        </div>
    )
}

PostItem.defaultProps = {
    showAction: true
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {addLike, removeLike, deletePost }) (PostItem)
