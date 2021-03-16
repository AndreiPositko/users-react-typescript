import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../../constants/routes';
import { logOut } from '../../store/auth/actions';
import { getUsersRequest } from '../../store/users/actions';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.scss';

const Main = ({history}) => {

    const { users, loading } = useSelector(state => ({
        users: state.users.data,
        loading: state.users.loading,
    }) )

    const dispatch = useDispatch();

    const getUsersHandler = () => {
        dispatch(getUsersRequest());
    }

    const logOutHandler = () => {
        dispatch(logOut());
        localStorage.clear();
        history.push(routes.login);
    }

    return (
        <div className={styles.main__page}>
            <Container className={ styles.header }>
                <Row className={ styles.row}>
                    <Col>
                        users
                    </Col>
                    <Col className={ styles.headerLinks}>
                        <a className={styles.headerLink} href='#hi'>home</a>
                        <a className={styles.headerLink} href='#hi'>service</a>
                        <a className={styles.headerLink} href='#hi'>about</a>
                        <a className={styles.headerLink} href='' onClick={ logOutHandler }>logout</a>
                    </Col>
                </Row>
            </Container>

            <Container className={styles.main_container}>
                <Row className={styles.main_wrapper}>
                    <Col className={styles.main_block}>
                        <button className={styles.button} onClick={ getUsersHandler }>Get Users</button>
                    </Col>
                </Row>
                <Row>
                    {loading && <h2>...Loading</h2>}
                    <ul className={ styles.users_list}>
                        {users.map((user) => (
                            <li key={user.id} className={styles.list_item}>{ user.id}. { user.name}</li>
                        ))}
                    </ul>
                </Row>
            </Container>
        </div>
    )
}

export default Main;
