import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../action/profile'
import Spinner from '../layout/spinner/spinner'
import { Link } from 'react-router-dom'
import DashBoardAction from './dashBoardaction'
import Experience from './Experience'
import Education from './Education'

function Dashborad({getCurrentProfile, deleteAccount, auth: { user }, profile: {profile, loading}}) {
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
                    <Experience experience={profile.experience}/>
                    <Education education={profile.education}/>

                    <div className="my-2">
                        <button 
                        className="btn btn-sm btn-danger rounded-0"
                        onClick={()=> deleteAccount() }>
                            <i className="fas fa-user-minus" /> Delete My Account </button>
                    </div>
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
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount}) (Dashborad)
