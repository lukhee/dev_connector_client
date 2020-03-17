import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Moment from 'react-moment'

const PostItem = ({ auth, post: { _id, text, name, avatar, user, likes, unlike, comments, date } }) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${user._id}`}>
                    <img className="rounded-image" src={avatar} alt='' />
                    <h4> {name} </h4>
                </Link>
            </div>
            <div>
                <p className="my-1">
                    {text}
                </p>
                <p className="post-date"> Posted on <Moment format="YYYY/MM/DD"> { date } </Moment></p>
                <button type="button" className="btn btn-light"> 
                    <i className="fas fa-thumbs-up"/>
                    <span>{likes}</span>
                </button>
                <button type="button" className="btn btn-light"> 
                    <i className="fas fa-thumbs-down"/>
                    <span>{unlike}</span>
                </button>
                <Link to="/post" className="btn btn-danger">
                    Discussion <span className="comment-count"> { comments.length } </span>
                </Link>
                { !auth.loadin && user === auth.user._id && (
                    <button type="button" className="btn btn-danger">
                        <i className="fas fa-times" />
                    </button>
                )}
            </div>
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { }) (PostItem)
