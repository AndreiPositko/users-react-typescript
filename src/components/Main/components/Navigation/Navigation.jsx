import React from 'react';

import { Route, Switch } from 'react-router-dom';

import routes from '../../../../constants/routes';
import Users from '../Users';
import Posts from '../Posts';
import Photos from '../Photos';

const Navigation = () => {

    return (
        <div>
            <Switch>
              <Route path={routes.users} component={ Users }/>
              <Route path={routes.posts } component={ Posts }/>
              <Route path={routes.photos } component={ Photos }/>
            </Switch>
        </div>
    )
}

export default Navigation;
