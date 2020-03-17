import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

function ProfileEducation({education: { school, degree, fieldofstudy, current, to , from }}) {
    return (
        <div>
            <h4 className="text-dark text-capitalize"> {school} </h4>
            <p>
                <Moment format="YYYY/MM/DD">{from}</Moment> - { ' ' }
                {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
            </p>
            <p>
                <strong>Position: </strong> <span className="text-capitalize"> {degree} </span> 
            </p>
            <p>
                <strong>Field of Study: </strong> <span className="text-capitalize"> {fieldofstudy} </span> 
            </p>
        </div>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
}

export default ProfileEducation