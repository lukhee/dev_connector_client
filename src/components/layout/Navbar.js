import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavLink = styled.span`
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    &:hover{
        color: #d33a2c
    }
`

const Navbar = ()=> {
    return (
        <div>
            <nav style={{background: "#343a40ab"}} className="navbar fixed-top navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">DevConnectors</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
                </div>
            </nav>
        </div>
    )
}

export default Navbar
