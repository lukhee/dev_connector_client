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
                        </Switch>
                    </section>
                    </Router>
            </Fragment>
        </Provider>
    )
}

export default App;
