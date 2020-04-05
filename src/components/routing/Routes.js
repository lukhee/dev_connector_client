import React, {Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../dashboard/dashboard'
import CreateProfile from '../profileForms/createProfile'
import AddExperience from '../profileForms/addExperience'
import AddEducation from '../profileForms/addEducation'
import Profiles from '../profiles/profile'
import Profile from '../profile/profile'
import Posts from '../posts/posts'
import Post from '../post/post'
import NotFound from '../layout/notFound'
import EditProfile from '../profileForms/editProfile'
import PrivateRoute from '../routing/PrivateRoute'
import Login from "../Auth/Login"
import Register from "../Auth/Register"
import Alert from '../layout/alert'

function Routes() {
    return (
        <Fragment>
            <section className="container pt-5 mb-3">
                <Alert/>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profiles" component={Profiles} />
                    <Route exact path='/profile/:id' component={Profile} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                    <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                    <PrivateRoute exact path="/add-experience" component={AddExperience} />
                    <PrivateRoute exact path="/add-education" component={AddEducation} />
                    <PrivateRoute exact path="/posts" component={Posts} />
                    <PrivateRoute exact path="/posts/:id" component={Post} />
                    <Route component={NotFound} />
                </Switch>
            </section>
        </Fragment>
    )
}

export default Routes
