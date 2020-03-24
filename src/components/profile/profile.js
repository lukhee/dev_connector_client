import React, {  Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/spinner/spinner'
import ProfileTop from './profileTop'
import ProfileAbout from './profileAbout'
import ProfileExperience from './profileExperience'
import ProfileEducation from './profileEducation'
import ProfileGithubRepos from './profileGithubRepos'
import { getProfileById } from '../../action/profile'
import { Link } from 'react-router-dom'

function Profile({ getProfileById, profile: {profile, loading}, auth, match }) { 
    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id]) 
    return (
        <Fragment>
            {profile === null || loading ? <Spinner/> : <Fragment>
                    <div className="d-flex justify-content-between">
                        <Link className="btn btn-sm btn-danger rounded-0 my-2 mr-2" to="/profiles"> Back To Profiles</Link>
                        {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id ? 
                        <Link className="btn btn-sm btn-light rounded-0 my-2" to="/edit-profile">Edit Profile</Link> : null}
                    </div>
                    <div>
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                        <div className="row m-0 justify-content-between">
                            <div className="bg-white border col-sm mr-sm-1 my-1"> 
                                <h2 className="text-danger"> Experience </h2>
                                {profile.experience.length > 0 ? <Fragment>
                                    {
                                        profile.experience.map(experience => (
                                            <ProfileExperience key={experience._id} experience={experience} />
                                        ))
                                    }
                                </Fragment> : <h5 className="lead"> No experience credentials</h5>}
                            </div>
                            <div className="bg-white border col-sm ml-sm-1 my-1"> 
                                <h2 className="text-danger"> Education </h2>
                                {profile.education > 0 ? ( <Fragment>
                                    {
                                        profile.education.map(experience => (
                                            <ProfileEducation education={profile.education} />
                                        ))
                                    }
                                </Fragment> ) : <h5 className="lead"> No education credentials</h5>}
                            </div>
                        </div>
                        <div>
                            {profile.githubusername && (<Fragment>
                                <ProfileGithubRepos githubusername={profile.githubusername} />
                            </Fragment>)}
                        </div>
                    </div>
                    </Fragment>}
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById : PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getProfileById }) (Profile)
