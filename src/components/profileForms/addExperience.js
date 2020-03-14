import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../action/profile'



const AddExperience= ({addExperience, history})=>  {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisable, toggleDisable] = useState(false)

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description
    } = formData

    const onChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit =(e)=> {
        e.preventDefault()
        addExperience(formData, history )
    }

    return (
        <>
            <h1 className="text-danger"> Add An Experience </h1>
            <p className="lead"> 
                <i className='fas fa-code-branch'/> Add any developer/programming experience
            </p>

            <small> * required field</small>

            <form className="form" onSubmit={e=> onSubmit(e)}>
                <div className="form-group">
                    <input type="text" className="form-control form-control-sm" value={title} onChange={e=> onChange(e)} placeholder="* Job Title" name="title" required />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm" value={company} onChange={e=> onChange(e)} placeholder="* Company" name="company" required />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm" value={location} onChange={e=> onChange(e)} placeholder="* Location" name="location" required />
                </div>
                
                <div className="form-group">
                    <h4> From Date </h4>
                    <input type="date" className="form-control form-control-sm" value={from} onChange={e=> onChange(e)} name="from" required />
                </div>

                <div className="form-group">
                    <p><input type="checkbox" name="current" value={from} checked={current} onChange={ ()=> {setFormData({...formData, current: !current}); toggleDisable(!toDateDisable) } } /> Current Job </p>
                </div>

                <div className="form-group">
                    <h4> To Date </h4>
                    <input type="date" className="form-control form-control-sm" value={to}  onChange={e=> onChange(e)} name="to" disabled={toDateDisable? "disabled" : ''}/>
                </div>

                <div className="form-group">
                    <textarea 
                        name="description"
                        cols="30"
                        rows="5"
                        className="form-control form-control-sm" value={description}
                        onChange={e=> onChange(e)}
                        placeholder="Job Description"
                    />
                </div>
                
                <div className="form-group">
                    <input type="submit" className="btn btn-danger btn-sm my-1 rounded-0 mr-1" />
                    <Link to='/dashboard' className="btn btn-sm btn-muted text-dark bg-light rounded-0"> Go Back </Link>
                </div>
            </form>
        </>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(withRouter(AddExperience))
