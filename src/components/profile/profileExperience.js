import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

function ProfielExperience({experience: { company, title, location, current, to , from, description }}) {
    console.log(company)
    return (
        <div className="border-bottom">
            <h4 className="text-dark text-capitalize mt-2"> {company} </h4>
            <p>
                <Moment format="YYYY/MM/DD">{from}</Moment> - { ' ' }
                {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
            </p>
            <p>
                <strong>Position: </strong> <span className="text-capitalize"> {title} </span>
            </p>
            <p>
                <strong>Description: </strong> <span className="text-capitalize"> {description} </span>
            </p>
        </div>
    )
}

ProfielExperience.propTypes = {
    experience: PropTypes.object.isRequired
}

export default ProfielExperience
