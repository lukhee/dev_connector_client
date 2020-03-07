import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import LandingPage from './components/layout/Landing'
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import './App.css';

const App= ()=> {
    return (
        <Fragment>
            <Router>
                <Navbar/>
                <Route exact  path="/" component={LandingPage} />
                <section className="container">
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </section>
                </Router>
        </Fragment>
    );
}

export default App;
