import React from 'react'
import styled from "styled-components"
import background from "../../img/bg-image.jpg"
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background}) ;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
`

const Section = styled.section`
    display: table-cell;
    width: 100vw;
    height: 100vh;
    vertical-align: middle;
    text-align: center;
`

const InnerSection = styled.section`
    display: inline-block;
`

const Landing = ({isAuthenticated})=> {
    if(isAuthenticated){
        return (
            <Redirect to='/dashboard'/>
        )
    }
    return (
        <div>
            <Background>
                <Section className="text-light text-center pt-5"> 
                    <InnerSection>
                        <h1 className="display-5 font-weight-bold">Developer Connector</h1>
                        <p> Create an account, profile/portfolio and post and let get you connected to developers </p>
                        <Link to="/register" className="btn btn-sm btn-danger font-weight-normal rounded-0 mr-2"> Sign Up </Link> 
                        <Link to="/login" className="btn btn-sm font-weight-normal rounded-0 btn-light"> Login </Link>
                    </InnerSection>
                </Section>
            </Background>
        </div>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps) (Landing)
