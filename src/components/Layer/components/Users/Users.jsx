import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';

import { WaveLoading } from 'react-loadingg';
import { Container, Row, Col } from 'react-bootstrap';

import routes from '../../../../constants/routes';
import { getUsersRequest } from '../../../../store/users/actions';

import global from '../../../../common-style/global.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => {

    const dispatch = useDispatch();

    const { users, loading } = useSelector(state => ({
        users: state.users.data,
        loading: state.users.loading,
    }))

    useEffect(() => {
        if (users.length) return;
        dispatch(getUsersRequest());
    }, [dispatch, users.length])

    return (
        <div>
            <Container className={global.component_container}>
                <Row>
                    {loading && <WaveLoading color='yellow' size='large' position='top' />}
                    <Col>
                        <h2 className={global.main_title}>Users</h2>
                        <ul className={ global.data_list}>
                            {users.map((user) => (
                                <li key={user.id} className={global.list_item}>
                                  <Link to={generatePath(routes.user, { userId: user.id })}> {user.id}. {user.name}</Link>
                                    {/* Second variant */}
                                    {/* <Link to={`${routes.users}/${user.id}}`}> {user.id}. {user.name}</Link> */}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Users;
