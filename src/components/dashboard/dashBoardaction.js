import React from 'react'
import { Link } from 'react-router-dom'

const DashBoardAction= ()=> {
    return (
        <div>
            <Link to='/edit-profile' className='mr-2 btn btn-sm btn-light'>
                <i className="fas fa-user-circle text-danger"/> Edit Profile </Link>
                <Link to='/add-experience' className='mr-2 btn btn-sm btn-light'>
                <i className="fab fa-black-tie text-danger"/> Add Experience </Link>
                <Link to='/add-education' className='mr-2 btn btn-sm btn-light'>
                <i className="fas fa-graduation-cap text-danger"/> Add Eduction </Link>
        </div>
    )
}

export default DashBoardAction 
