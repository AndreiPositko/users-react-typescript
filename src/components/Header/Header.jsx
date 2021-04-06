import React from 'react';

import { useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import routes from '../../constants/routes';
import { logOut } from '../../store/auth/actions';

import styles from './style.module.scss';

const Header = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(logOut());
        localStorage.clear();
        history.push(routes.login);
    }

    return (
        <div className={styles.header_wrapper}>
            <Container className={ styles.header } fluid='md'>
                <Row className={ styles.row}>
                    <Col>
                        Data
                    </Col>
                    <Col className={styles.header_links}>
                        <Link className={styles.header_link} to={routes.users}>users</Link>
                        <Link className={styles.header_link} to={routes.posts}>posts</Link>
                        <Link className={styles.header_link} to={routes.photos}>photos</Link>
                        <button className={styles.header_button} onClick={ logOutHandler }>logout</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;
