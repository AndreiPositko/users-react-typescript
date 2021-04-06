import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useHistory, useRouteMatch } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { WaveLoading } from 'react-loadingg';
import { Button } from 'react-bootstrap';

import { userReset } from '../../../../../../store/users/actions';
import routes from '../../../../../../constants/routes';

import global from '../../../../../../common-style/global.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const SingleUser = () => {

    const [currentUser, setCurrentUser] = useState({});

    const dispatch = useDispatch();
    const history = useHistory();
    const { url } = useRouteMatch();
    const { id } = useParams();
    
    const { users, loading } = useSelector(state => ({
        users: state.users.data,
        editedUser: state.users.editedSingleUser,
        loading: state.users.loading,
    }));
    
    useEffect(() => {

        const currUser = users.find(user => user.id === +id);
        setCurrentUser(currUser);

            return () => {
                dispatch(userReset())
            }
    }, [dispatch, id, users])

    const editCurrentUser = () => {
        history.push(`${url}/edit`);
    }
  
    return (
        <div>
            <Container className={ global.component_container }>
                 <Row>
                    {loading ? <WaveLoading color='yellow' size='large' position='top' /> : 
                        currentUser.id ?
                        <Col>
                            <div className={ global.list_header }>
                                <h2 className={ global.main_title }>User № { currentUser.id }</h2>
                                <Button variant="warning" onClick={() => editCurrentUser(currentUser.id)}>Edit User</Button>
                            </div>
                            <ul className={ global.data_list }>
                                <li className={ global.list_item }><span className={ global.item }>user name:</span> { currentUser.name }</li>
                                <li className={ global.list_item }><span className={ global.item }>username:</span> { currentUser.username }</li>
                                <li className={ global.list_item }><span className={ global.item }>mail:</span> { currentUser.email }</li>
                                <li className={ global.list_item }><span className={ global.item }>phone:</span> { currentUser.phone }</li>
                                <li className={ global.list_item }><span className={ global.item }>city:</span> { currentUser.address?.city }</li>
                                <li className={ global.list_item }><span className={ global.item }>street:</span> { currentUser.address?.street }</li>
                            </ul>
                        </Col>
                        :
                        <Col>
                            <div className={ global.single_data_error }>
                                <p>There is no such user!</p>
                                <Link to={ routes.users } className={ global.single_link_error }>Back to Users</Link>
                            </div>
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default SingleUser;
