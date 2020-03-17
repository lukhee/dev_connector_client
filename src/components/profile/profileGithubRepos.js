import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ProfileGithubRepos = ({ ProfileGithubRepos  }) => {
    return (
        <div>
            <h2> First latest repos will be here if name found </h2>
        </div>
    )
}

ProfileGithubRepos.propTypes = {
    ProfileGithubRepos: PropTypes.string
}

export default ProfileGithubRepos
