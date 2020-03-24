import React, {Fragment} from 'react'
import { NavLink, withRouter } from "react-router-dom"
import styled from "styled-components"
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../action/auth'

const NavlinkStyle = styled.span`
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    &:hover{
        color: #d33a2c
    }
`

const Navbar = ({ history, auth: { isAuthenticated, loading}, logout })=> {
    const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active">
            <NavLink className="nav-link" activeClassName="activeLink" to="/profiles"><NavlinkStyle>Developers</NavlinkStyle></NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="activeLink" to="/posts"><NavlinkStyle>Posts</NavlinkStyle></NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="activeLink" to="/dashboard"><NavlinkStyle>Dashboard</NavlinkStyle></NavLink>
        </li>
        <li className="nav-item">
            {/* <i className="fas fa-sign-out-alt" /> */}
            <span onClick={()=>logout(history)} className="nav-link hide-sm" ><NavlinkStyle>Logout</NavlinkStyle></span>
        </li>
    </ul> 

    );
    const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active">
            <NavLink className="nav-link" activeClassName="activeLink" to="/profiles"><NavlinkStyle>Developers <span className="sr-only">(current)</span> </NavlinkStyle></NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="activeLink" to="/register"><NavlinkStyle>Register</NavlinkStyle></NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="activeLink" to="/login"><NavlinkStyle>Login</NavlinkStyle></NavLink>
        </li>
    </ul>
    )

    return (
        <div>
            <nav style={{background: "#343a40ab"}}  className="navbar fixed-top navbar-expand-lg navbar-dark">
                <NavLink className="navbar-brand" to="/">
                    <i className="fas fa-code" />
                    DevConnectors</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
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

export default connect(mapStateToProps, { logout }) (withRouter(Navbar))
