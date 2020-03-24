import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const ProfileItem = ({
    profile: { 
        user: { _id, name, avatar},
        status,
        company,
        location,
        skills
    }
}) => {
    return (
        <div className="bg-light row justify-content-between p-3 rounded mb-2">
            <img src={avatar} alt="" className="col-sm-3 pr-3 rounded-circle" />
            <div className="col-md-5 order-sm-last">
                <h2 className="text-capitalize">{name}</h2>
                <p> {status} {company && <span> at {company} </span>} </p>
                <p className="my-1">{location && <span> {location} </span>} </p>
                <Link to={`/profile/${_id}`} className="rounded-0 my-1q btn btn-sm btn-danger"> View Profile</Link>
            </div>
            <ul className="list-unstyled col-md-3 order-sm-last">
                {skills.slice(0,4).map((skill, index)=> 
                    <li key={index} className="text-danger">
                        <i className="fas fa-check"/>{skill} </li>
                )}
            </ul>
        </div>
    )
}

ProfileItem.propTypes = ({
    profile: PropTypes.object.isRequired
})

export default ProfileItem
