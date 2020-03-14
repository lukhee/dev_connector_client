import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../action/profile'



const AddEducation= ({addEducation, history})=>  {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisable, toggleDisable] = useState(false)

    const {
        school,
        degree,
        fieldofstudy,
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
        addEducation(formData, history )
    }

    return (
        <>
            <h1 className="text-danger"> Add An Education </h1>
            <p className="lead"> 
                <i className='fas fa-user-graduate'/> Add any school or bootcamp you have attended
            </p>
            <small> * required field</small>

            <form className="form" onSubmit={e=> onSubmit(e)}>
                <div className="form-group">
                    <input type="text" className="form-control form-control-sm" value={school} onChange={e=> onChange(e)} placeholder="* School Attended" name="school" required />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm" value={degree} onChange={e=> onChange(e)} placeholder="* Degree or certificate acquired" name="degree" required />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm" value={fieldofstudy} onChange={e=> onChange(e)} placeholder="* Field of Study" name="fieldofstudy" required />
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
                        placeholder="Program Description"
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

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(withRouter(AddEducation))
