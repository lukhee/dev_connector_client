import React, {Fragment} from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../action/auth'

const NavLink = styled.span`
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    &:hover{
        color: #d33a2c
    }
`

const Navbar = ({ auth: { isAuthenticated, loading}, logout })=> {
    const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active">
            <Link className="nav-link" to="/dashboard"><NavLink>Dashboard</NavLink></Link>
        </li>
        <li className="nav-item active">
            {/* <i className="fas fa-sign-out-alt" /> */}
            <span onClick={logout} className="nav-link hide-sm"><NavLink>Logout</NavLink></span>
        </li>
    </ul> 

    );
    const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active">
            <Link className="nav-link" to="/dashbord"><NavLink>Developers</NavLink></Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/register"><NavLink>Register</NavLink></Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/login"><NavLink>Login</NavLink></Link>
        </li>
    </ul>
    )

    return (
        <div>
            <nav style={{background: "#343a40ab"}} className="navbar fixed-top navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">
                    <i className="fas fa-code" />
                    DevConnectors</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    {!loading ? (<Fragment>
                        {isAuthenticated? authLinks : guestLinks }
                    </Fragment>): null}
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    logout : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout }) (Navbar)
