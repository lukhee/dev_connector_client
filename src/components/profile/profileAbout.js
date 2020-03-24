import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
    profile : { bio, skills, user: { name } }
}) => {
    return (
        <div className= " bg-light text-center my-2 py-2 ">
            {
                bio && ( 
                    <> 
                        <h2 className="text-danger"> { name.split(' ')[0]}'s Bio </h2>
                        <p className="text-capitalize"> { bio } </p>
                        <div style={{height: "1px"}} className="w-100 bg-white mb-1" />
                    </>
                )
            }

            <h2 className="text-danger"> Skill Set </h2>
            <div> 
                {skills.map((skill, index)=> 
                    <span key={index} className="mr-2"> 
                        <i className="fas fa-check"/> {skill}
                    </span>
                )}
            </div>

        </div>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout
