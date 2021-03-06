import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/spinner/spinner'
import { getProfiles } from '../../action/profile'
import ProfileItem from './profileItem'

const Profiles = ({ getProfiles, profile: { profiles, loading }  }) => {
    useEffect(()=>{
        getProfiles()
    }, [getProfiles])

    return (
        <Fragment>
            { loading ? <Spinner></Spinner> : <Fragment>
                <h1 className="text-danger"> Developers </h1>
                <p className="lead"> 
                    <i className="fab fa-connectdevelop"></i> Browse and connect with developers
                </p>
                <div>
                    {profiles.length > 0 ? (
                        profiles.map(profile => (
                            <ProfileItem key={profile._id} profile={profile} />
                        ))
                    ) : <h4> No profile found </h4>}
                </div>
                </Fragment>
            }
        </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect( mapStateToProps, { getProfiles }) (Profiles)
