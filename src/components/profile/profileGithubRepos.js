import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/spinner/spinner'
import { getGithubRepos } from '../../action/profile'

const ProfileGithubRepos = ({ githubusername, getGithubRepos, repos  }) => {
    useEffect(()=>{
        getGithubRepos(githubusername)
    }, [getGithubRepos, githubusername])
    return (
        <div className="my-1">
            <h2 className="text-danger my-2"> Github Repos </h2>
            {repos === null ? <Spinner/> : (
                repos.map(repo => (
                <div key={repo.id} className="d-flex justify-content-between bg-white p-1 my-1 border border-light">
                    <div>
                        <h4>
                            <a className="text-capitalize" href={repos.html_url} target='_blank' rel="noopener noreferrer"> {repo.name} </a>
                        </h4>
                        <p className="text-capitalize">{repos.description}</p>
                    </div>
                    <div>
                        <ul className="list-group">
                            <li className="badge badge-danger mb-1 rounded-0">
                                Stars: {repo.stargazers_count}
                            </li>
                            <li className="badge badge-dark mb-1 rounded-0">
                                Watchers: {repo.watchers_count}
                            </li>
                            <li className="badge badge-light rounded-0">
                                Forks: {repo.forks_count}
                            </li>
                        </ul>
                    </div>
                    </div>
                ))
            )}
        </div>
    )
}

ProfileGithubRepos.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    githubusername: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        repos: state.profile.repos
    }
}

export default connect(mapStateToProps, {getGithubRepos} ) (ProfileGithubRepos)
