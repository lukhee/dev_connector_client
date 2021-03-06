import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/spinner/spinner'
import PostItem from './postItem'
import { getPosts } from '../../action/post'
import PostForm from './postForm'

const Posts = ({ getPosts, post: { posts, loading} })=> {
    useEffect(()=>{
        getPosts()
    }, [getPosts])
    return loading ? (<Spinner/>) : 
        (<Fragment>
            <h1 className="text-danger"> Post </h1>
            <p className="lead">
                <i className="fas fa-user"/> Welcome to the community
            </p>
            <PostForm />
            <div>
                {posts.map(post => (
                    <PostItem key={post._id} post={post}/>
                ))}
            </div>
        </Fragment>)
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps, { getPosts }) (Posts)
