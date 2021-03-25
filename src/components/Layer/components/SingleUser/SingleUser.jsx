import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { WaveLoading } from 'react-loadingg';

import { getUserRequest, userReset } from '../../../../store/users/actions';

import styles from './style.module.scss';
import global from '../../../../common-style/global.module.scss';

const SingleUser = () => {

    // Get singleUser from component

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

    //Get users through saga

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getUserRequest(id));

        return () => {
            dispatch(userReset())
        }
    }, [dispatch, id])

    const { user, loading } = useSelector(state => ({
        user: state.users.singleUser,
        loading: state.users.loading,
    }));
    
    return (

        <div>
            <Container className={global.component_container}>
                 <Row>
                    {loading && <WaveLoading color='yellow' size='large' position='top' />}
                    <Col>
                        <h2 className={global.main_title}>User № { user.id }</h2>
                        <ul className={ global.data_list}>
                            <li className={global.list_item}><span className={styles.item}>user name:</span> { user.name }</li>
                            <li className={global.list_item}><span className={styles.item}>username:</span> { user.username }</li>
                            <li className={global.list_item}><span className={styles.item}>mail:</span> { user.email }</li>
                            <li className={global.list_item}><span className={styles.item}>phone:</span> { user.phone }</li>
                            <li className={global.list_item}><span className={styles.item}>website:</span> { user.website }</li>
                            <li className={global.list_item}><span className={styles.item}>city:</span> {user.address?.city }</li>
                            <li className={global.list_item}><span className={styles.item}>street:</span> {user.address?.street }</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SingleUser;
