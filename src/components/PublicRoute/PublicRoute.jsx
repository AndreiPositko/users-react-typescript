import { Route } from 'react-router-dom';

const PublicRoute = ({...rest}) => {
    return <Route {...rest}/>
}

export default PublicRoute;
