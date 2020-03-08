import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAlert } from  '../../action/alert'
import PropTypes from 'prop-types'

const Register = ({setAlert})=> {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name, email, password, password2} = formData

    const onChange =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        if(password !== password2){
            setAlert('password not match', "danger")
        }
        console.log("password are equal")
        const newUser = {
            name, 
            email,
            password
        }
    }


    return (
        <div className="w-sm-75">
            
            <div className="mt-4">
                <h1 className="text-danger"> Sign Up </h1>
                <p> <i className="fas fa-user" /> Create Your Account </p>
            </div>

            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="form-group">
                    <input className="form-control rounded-0" 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e)=>onChange(e)}
                        placeholder="Full-Name here" />
                </div>
                <div className="form-group mb-0">
                    <input className="form-control rounded-0" 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e)=>onChange(e)}
                        placeholder="Email here" 
                        required />
                </div>
                <small className=" mb-3 text-muted form-text">This site uses Gravatar to populate image</small>
                <div className="form-group">
                    <input className="form-control rounded-0" 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={(e)=>onChange(e)}
                        placeholder="Password" />
                </div>
                <div className="form-group">
                    <input className="form-control rounded-0" 
                        type="password" 
                        name="password2" 
                        value={password2} 
                        onChange={(e)=>onChange(e)}
                        placeholder="Confirm Password" />

                </div>
                <button type="submit" className="btn btn-sm btn-danger rounded-0 mb-2"> Submit </button>
            </form>

            <p className="d-inline"> Already have an accout? </p> <Link to="/login" className="text-danger"> Sign In </Link>

        </div>
    )
}
Register.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert } ) (Register)
