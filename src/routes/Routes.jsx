import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../components/Login';
import Users from '../components/Layer/components/Users';
import Posts from '../components/Layer/components/Posts';
import Photos from '../components/Layer/components/Photos';
import SingleUser from '../components/Layer/components/Users/components/SingleUser';
import EditUser from '../components/Layer/components/Users/components/EditUser';
import SinglePost from '../components/Layer/components/Posts/components/SinglePost';
import EditPost from '../components/Layer/components/Posts/components/EditPost';
// import SinglePhoto from '../components/Layer/components/Photos/components/SinglePhoto';
// import EditPhoto from '../components/Layer/components/Photos/components/EditPhoto';
import NotFound from '../components/NotFound';
import MainPage from './../components/MainPage';

import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';

import routes from './../constants/routes';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path={routes.main} component={MainPage} />
                
                <PublicRoute exact path={routes.login} component={ Login } />
                
                <PrivateRoute exact path={ routes.users } component={ Users } />

                <PrivateRoute exact path={ routes.posts } component={ Posts } />

                <PrivateRoute exact path={ routes.photos } component={ Photos } />

                <PrivateRoute exact path={`${routes.users}/:id`} component={ SingleUser } />

                <PrivateRoute path={`${routes.users}/:id/edit`} component={ EditUser } />
                
                <PrivateRoute exact path={`${routes.posts}/:id`} component={SinglePost} />
                
                <PrivateRoute path={`${routes.posts}/:id/edit`} component={ EditPost }/>
                
                {/* <PrivateRoute exact path={`${routes.photos}/:id`} component={SinglePhoto} /> */}
                
                {/* <PrivateRoute path={`${routes.photos}/:id/edit`} component={ EditPhoto }/> */}

                <Route path={ routes.notFound } component={ NotFound }/>
            </Switch>
        </Router>
    )
}

export default Routes;