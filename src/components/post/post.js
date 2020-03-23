import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import Spinner from '../layout/spinner/spinner'
import PostItem from '../posts/postItem'
import { getPost } from '../../action/post'
import CommentForm from './commentForm'
import CommentItem from './commentItem'

const Post = ({ getPost, post: { post , loading }, match })=>  {
    useEffect(()=> {
        getPost(match.params.id)
    }, [getPost])
    return loading || post === null ? <Spinner/> : 
        <Fragment>
            <Link to='/posts' className='btn btn-sm btn-danger rounded-0'>
                Back To Posts
            </Link>
            <PostItem post={post} showAction={false} />
            <CommentForm postId = {post._id} />
            <div>
                {post.comments.map(comment=> (
                    <CommentItem key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div>
        </Fragment>}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect (mapStateToProps , { getPost }) (Post)