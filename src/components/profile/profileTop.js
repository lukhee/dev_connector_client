import React from 'react'
import PropTypes from 'prop-types'

function ProfileTop({profile: {status, company, location, website, social, user: { name, avatar}}}) {
    return (
        <div className="bg-danger p-2 text-center text-white" >
            <img 
            className="rounded-circle" 
            src={avatar} 
            alt="profile_image"
            />
            <h1 className="text-capitalize"> {name} </h1>
            <p className="lead"> {status} {company && <span> at {company}</span> } </p>
            <p> {location} </p>
            <div className="my-1">
                {social && social.website && (<span className="mr-2"> 
                        <a href={social.website} target='_black' rel='noopener noreferrer'>
                            <i className='fab fa-globe text-light px-1 btn' />
                        </a>
                    </span>
                )}
                {social && social.twitter && (<span className="mr-2"> 
                        <a href={social.twitter} target='_black' rel='noopener noreferrer'>
                            <i className='fab fa-twitter fa-sx text-light px-1 btn' />
                        </a>
                    </span>
                )}
                {social && social.facebook && (<span className="mr-2"> 
                        <a href={social.facebook} target='_black' rel='noopener noreferrer'>
                            <i className='fab fa-facebook text-light px-1 btn' />
                        </a>
                    </span>
                )}
                {social && social.youtube && (<span className="mr-2"> 
                        <a href={social.youtube} target='_black' rel='noopener noreferrer'>
                            <i className='fab fa-youtube text-light px-1 btn' />
                        </a>
                    </span>
                )}
                {social && social.instagram && (<span className="mr-2"> 
                        <a href={social.instagram} target='_black' rel='noopener noreferrer'>
                            <i className='fab fa-instagram fa-sx' />
                        </a>
                    </span>
                )}
            </div>
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop
