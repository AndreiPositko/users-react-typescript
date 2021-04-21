import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layer from '../Layer';

import routes from '~/constants/routes';

const PrivateRoute = ({ ...rest }) => {
  // const { component: Component, ...rest } = props;
  // return isLoggedIn ? <Route {...rest}/> : <Redirect to={ routes.login }/>

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to={routes.login} />;
  }

  return (
    <Layer>
      <Route {...rest} />
    </Layer>
  );

  // 2-nd variant

  // return (
  //     <Route
  //         {...rest}
  //         render={() => (
  //             <Layer>
  //                 <Component />
  //             </Layer>
  //         )}
  //     />
  // )
};

export default PrivateRoute;
