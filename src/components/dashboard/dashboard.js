import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../action/profile'
import Spinner from '../layout/spinner/spinner'
import { Link } from 'react-router-dom'
import DashBoardAction from './dashBoardaction'

function Dashborad({getCurrentProfile, auth: { user }, profile: {profile, loading}}) {
    useEffect(()=>{
        getCurrentProfile()
    }, [getCurrentProfile])
    return loading && profile === null ? 
        <Spinner /> : 
        <Fragment> 
            <h1 className="text-danger"> Dashboard </h1>
            <p className="text-capitalize lead"> <i className='fas fa-user '/> Welcome {user && user.name} </p>
            {profile !== null ? (
                <Fragment> 
                    <DashBoardAction />
                </Fragment>) : 
                (<Fragment> 
                    <p>You have not setup a profile yet, please add now! </p>
                    <Link to="/create-profile" className="btn btn-danger btn-sm my-1 rounded-0"> Create Profile </Link>
                </Fragment>)}
        </Fragment>
}

Dashborad.propTypes = {
    getCurrentProfile : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

export default connect(mapStateToProps, {getCurrentProfile}) (Dashborad)
