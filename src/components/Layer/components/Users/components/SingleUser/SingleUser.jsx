import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useHistory, useRouteMatch } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { WaveLoading } from 'react-loadingg';
import { Button } from 'react-bootstrap';

import { userReset, editUserRequest, getUserRequest } from '../../../../../../store/users/actions';
import routes from './../../../../../../constants/routes';

import styles from './style.module.scss';
import global from '../../../../../../common-style/global.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const SingleUser = () => {
    // Get singleUser from component - 1st variant

    // const [user, setSingleUser] = useState(false);
    // const { id } = props.match.params;
    // useEffect(() => {
    //     getUser(id);
    // },[])

    // const getUser = async (id) => {
    //     const userData = await api.users.getSingleUser(id);
    //     setSingleUser(userData);
    // }

    // const { id } = props.match.params;
    // const { id } = useParams();
    // const [user, setUser] = useState({});

    //Get users through saga - 2nd variant

    const dispatch = useDispatch();
    const history = useHistory();
    const { url } = useRouteMatch();
    const { id } = useParams();
    
    const { singleUser, loading } = useSelector(state => ({
        singleUser: state.users.singleUser,
        loading: state.users.loading,
    }));
    
    useEffect(() => {
        
        dispatch(getUserRequest(id));

            return () => {
                dispatch(userReset())
            }
    }, [dispatch, id])

    const editsingleUser = (data) => {
        dispatch(editUserRequest({...data, id}))
        history.push(`${url}/edit`);
    }
  
    return (
        <div>
            <Container className={global.component_container}>
                 <Row>
                    {loading ? <WaveLoading color='yellow' size='large' position='top' /> : 
                        singleUser.id ?
                        <Col>
                            <div className={global.list_header}>
                                <h2 className={global.main_title}>User № {singleUser.id}</h2>
                                <Button variant="warning" onClick={() => editsingleUser(singleUser.id)}>Edit User</Button>
                            </div>
                            <ul className={global.data_list}>
                                <li className={global.list_item}><span className={styles.item}>user name:</span> {singleUser.name}</li>
                                <li className={global.list_item}><span className={styles.item}>username:</span> {singleUser.username}</li>
                                <li className={global.list_item}><span className={styles.item}>mail:</span> {singleUser.email}</li>
                                <li className={global.list_item}><span className={styles.item}>phone:</span> {singleUser.phone}</li>
                                <li className={global.list_item}><span className={styles.item}>city:</span> {singleUser.address?.city}</li>
                                <li className={global.list_item}><span className={styles.item}>street:</span> {singleUser.address?.street}</li>
                            </ul>
                        </Col>
                        :
                        <Col>
                            <div className={ styles.user_error}>
                                <p>There is no such user!</p>
                                <Link to={routes.users} className={styles.link_error}>Back to Users</Link>
                            </div>
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default SingleUser;
