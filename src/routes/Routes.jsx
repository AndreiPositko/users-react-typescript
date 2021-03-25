import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Main from '../components/Main';
import Login from '../components/Login';
import Users from '../components/Layer/components/Users';
import Posts from '../components/Layer/components/Posts';
import Photos from '../components/Layer/components/Photos';
import SingleUser from '../components/Layer/components/SingleUser';
import SinglePost from '../components/Layer/components/SinglePost';
import SinglePhoto from '../components/Layer/components/SinglePhoto';
import NotFound from '../components/NotFound';
import MainPage from './../components/MainPage/MainPage';

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

                <PrivateRoute path={`${routes.users}/:id`} component={SingleUser} />
                
                <PrivateRoute path={`${routes.posts}/:id`} component={SinglePost} />
                
                <PrivateRoute path={`${routes.photos}/:id`} component={ SinglePhoto }/>

                <Route path={ routes.notFound } component={ NotFound }/>
            </Switch>
        </Router>
    )
}

export default Routes;
