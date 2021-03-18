import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Main from '../components/Main';
import Login from '../components/Login';
import Users from '../components/Main/components/Users';
import Posts from '../components/Main/components/Posts/';
import Photos from '../components/Main/components/Posts/';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';


import routes from './../constants/routes';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path={routes.main} component={ Main }/>
                <PublicRoute path={routes.login} component={Login} />
                
                <PrivateRoute path={ routes.users } component={ () => (
                    <Main>
                        <Users/>
                    </Main>
                )} />

                <PrivateRoute path={ routes.posts } component={ () => (
                    <Main>
                        <Posts/>
                    </Main>
                )} />

                <PrivateRoute path={ routes.photos } component={ () => (
                    <Main>
                        <Photos/>
                    </Main>
                )} />
                {/* <PrivateRoute path={routes.users} component={ Users }/> */}
            </Switch>
        </Router>
    )
}

export default Routes;
