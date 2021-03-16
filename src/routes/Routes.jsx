import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Main from '../components/Main';
import Login from '../components/Login';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';


import routes from './../constants/routes';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute path={routes.login} component={ Login }/>
                <PrivateRoute exact path={routes.main} component={ Main }/>
            </Switch>
        </Router>
    )
}

export default Routes;
