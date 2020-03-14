import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import LandingPage from './components/layout/Landing'
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Alert from './components/layout/alert'
// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './action/auth'
import setAuthToken from './util/setAuthToken'
import Dashboard from './components/dashboard/dashboard'
import CreateProfile from './components/profileForms/createProfile'
import AddExperience from './components/profileForms/addExperience'
import AddEducation from './components/profileForms/addEducation'
import EditProfile from './components/profileForms/editProfile'
import PrivateRoute from './components/routing/PrivateRoute'
import './App.css';

if(localStorage.token){
    setAuthToken(localStorage.token)
}

const App= ()=> { 
    useEffect(()=>{
        store.dispatch(loadUser())
    }, [])

    return(
        <Provider store={store}>
            <Fragment>
                <Router>
                    <Navbar/>
                    <Route exact  path="/" component={LandingPage} />
                    <section className="container pt-5">
                        <Alert/>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                            <PrivateRoute exact path="/add-experience" component={AddExperience} />
                            <PrivateRoute exact path="/add-education" component={AddEducation} />
                        </Switch>
                    </section>
                    </Router>
            </Fragment>
        </Provider>
    )
}

export default App;
