import React, {  useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CreateProfile, getCurrentProfile } from '../../action/profile'

const EditProfile = ({  profile: {profile, loading}, CreateProfile, getCurrentProfile, history })=> {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    })

    const [displaySocialInput, toggleSocialInput] = useState(false)

    useEffect(()=>{
        getCurrentProfile();

        setFormData({
            company: loading || !profile.company? '' : profile.company,
            website: loading || !profile.website? '' : profile.website,
            location: loading || !profile.location? '' : profile.location,
            status: loading || !profile.status? '' : profile.status,
            skills: loading || !profile.skills? '' : profile.skills.join(','),
            githubusername: loading || !profile.githubusername? '' : profile.githubusername,
            bio: loading || !profile.bio? '' : profile.bio,
            twitter: loading || !profile.social? '' : profile.social.twitter,
            facebook: loading || !profile.social? '' : profile.social.facebook,
            linkedin: loading || !profile.social? '' : profile.social.linkedin,
            youtube: loading || !profile.social? '' : profile.social.youtube,
            instagram: loading || !profile.social? '' : profile.social.instagram,
        })
    }, [loading])

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData

    const onChnage = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        CreateProfile(formData, history, true);
    }
    return (
        <div>
            <h1 className="text-danger"> Create your Profile </h1>
            <p>
                <i className="fas fa-user" /> Let's get some information to make your profile stand out 
            </p> 
            <small> * required field </small>
            <form onSubmit = {(e)=> onSubmit(e)}>
                <div className="form-group">
                    <select className="form-control form-control-sm font-weight-bold rounded-0" value={status} onChange={e => onChnage(e)} name='status'>
                        <option value="0"> * Select Professional Status</option>
                        <option value="Developer"> Developer </option>
                        <option value="Junior Developer"> Junior Developer </option>
                        <option value="Senior Developer"> Senior Developer </option>
                        <option value="Manager"> Manager </option>
                        <option value="Student or Learning"> Student or Learning </option>
                        <option value="Inter"> Inter </option>
                    </select>
                    <small className="form-text"> Give us an idea of where you at in your company </small>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm font-weight-bold rounded-0" value={company}  onChange={e => onChnage(e)} placeholder="company" name="company" />
                    <small className="form-text"> Could be your company or one you work for </small>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm font-weight-bold rounded-0" value={website}  onChange={e => onChnage(e)} placeholder="website" name="website" />
                    <small className="form-text"> Could be your own or company you work for</small>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm font-weight-bold rounded-0" value={location}  onChange={e => onChnage(e)} placeholder="location" name="location" />
                    <small className="form-text"> City & state suggested (eg. Lagos, Nigeria) </small>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm font-weight-bold rounded-0" value={skills}  onChange={e => onChnage(e)} placeholder="skills" name="skills" />
                    <small className="form-text"> Please use comma seperated value (eg. HTML, CSS, JAVASCRIPT) </small>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm font-weight-bold rounded-0" value={githubusername}  onChange={e => onChnage(e)} placeholder="githubusername" name="githubusername" />
                    <small className="form-text"> Please valid name used in your github</small>
                </div>

                <div className="form-group">
                    <textarea type="text" className="form-control form-control-sm font-weight-bold rounded-0" value={bio}  onChange={e => onChnage(e)} placeholder="short bio of yourself" name="bio" />
                    <small className="form-text"> Shortly describe who you are. </small>
                </div>

                <div className="my-2"> 
                    <button onClick={()=> toggleSocialInput(!displaySocialInput)} type="button" className="btn btn-light btn-sm rounded-0 font-weight-bold">
                        Add Social Network Links
                    </button>
                    <small> Optional </small>
                </div>
                { displaySocialInput && 
                <>
                    <div className="form-group">
                        <i style={{width: "30px"}} className="align-middle text-primary fab fa-twitter fa-2x"/>
                    <input type="text" className="rounded-0 form-control form-control-sm font-weight-bold w-75 d-inline-block align-middle ml-2" value={twitter}  onChange={e => onChnage(e)} placeholder="Twitter Url" name="twitter" />
                    </div>

                    <div className="form-group">
                        <i style={{width: "30px"}} className="align-middle text-danger fab fa-youtube fa-2x"/>
                        <input type="text" className="rounded-0 form-control form-control-sm w-75 d-inline-block align-middle ml-2" value={youtube}  onChange={e => onChnage(e)} placeholder="youtube Url" name="youtube" />
                    </div>

                    <div className="form-group">
                        <i  style={{width: "30px"}} className="align-middle text-info fab fa-linkedin fa-2x"/>
                        <input type="text" className="rounded-0 form-control form-control-sm w-75 d-inline-block align-middle ml-2" value={linkedin}  onChange={e => onChnage(e)} placeholder="Linkedin Url" name="linkedin" />
                    </div>

                    <div className="form-group">
                        <i style={{width: "30px"}} className="align-middle text-info fab fa-instagram fa-2x"/>
                        <input type="text" className="rounded-0 form-control form-control-sm w-75 d-inline-block align-middle ml-2" value={instagram}  onChange={e => onChnage(e)} placeholder="Instagram Url" name="instagram" />
                    </div>
                    
                    <div className="form-group">
                        <i  style={{width: "30px"}} className="align-middle text-primary fab fa-facebook fa-2x"/>
                        <input type="text" className="rounded-0 form-control form-control-sm w-75 d-inline-block align-middle ml-2" value={facebook}  onChange={e => onChnage(e)} placeholder="Facebook Url" name="facebook" />
                    </div>
                </>}
                <div className="form-group">
                    <input type="submit" className="btn btn-danger btn-sm my-1 rounded-0 mr-1" />
                    <Link to='/dashboard' className="btn btn-sm btn-muted text-dark bg-light rounded-0"> Go Back </Link>
                </div>
            </form>
        </div>
    )
}

EditProfile.propTypes = {
    CreateProfile : PropTypes.func.isRequired,
    getCurrentProfile : PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps , { CreateProfile, getCurrentProfile }) (withRouter(EditProfile))
