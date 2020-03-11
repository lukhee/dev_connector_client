import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../action/auth'
import PropTypes from 'prop-types'

const Login = ({ login, isAuthenticated })=> {

    const [formData, setFormData] = useState({
        email: "",
    })

    const { email, password } = formData

    const onChange =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        login({email, password})
    }

    // Redirect if logged in
    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }

    return (
        <div className="w-sm-75">
            
            <div className="mt-4">
                <h1 className="text-danger"> Sign In </h1>
                <p> <i className="fas fa-user" /> Sign Into Your Account </p>
            </div>

            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="form-group">
                    <input className="form-control rounded-0" 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e)=>onChange(e)}
                        placeholder="Email here" 
                        required />
                </div>
                <div className="form-group">
                    <input className="form-control rounded-0" 
                        type="password" 
                        name="password" 
                        value={password || ''} 
                        onChange={(e)=>onChange(e)}
                        placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-sm btn-danger rounded-0 mb-2"> Login </button>
            </form>

            <p className="d-inline"> Don't have an account? </p> <Link to="/register" className="text-danger"> Sign Up </Link>

        </div>
    )
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login }) (Login)

