import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import LandingPage from './components/layout/Landing'
import Routes from './components/routing/Routes'
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
                    <Switch>
                        <Route exact  path="/" component={LandingPage} />
                        <Route component={Routes} />
                    </Switch>
                </Router>
            </Fragment>
        </Provider>
    )
}

export default App;
