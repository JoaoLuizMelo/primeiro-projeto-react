import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import User from './container/User';

function Routes() {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/usuarios" component={User}/>
            </Switch>
        </Router>
    )
}

export default Routes