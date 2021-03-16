import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import routes from './../../constants/routes';

const PrivateRoute = ({ ...rest }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return isLoggedIn ? <Route {...rest}/> : <Redirect to={ routes.login}/>
}

export default PrivateRoute;
