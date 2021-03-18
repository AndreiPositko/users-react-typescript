import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { WaveLoading } from 'react-loadingg';
import { Container, Row } from 'react-bootstrap';


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
        dispatch(getUsersRequest());
    }, [dispatch])

    return (
        <div>
           
            <Container className={global.component_container}>
                
                 <Row>
                    {loading && <WaveLoading color='yellow' size='large' position='top' />}
                    
                     <h2>Users</h2>
                    <ul className={ global.users_list}>
                        {users.map((user) => (
                            <li key={user.id} className={global.list_item}>{ user.id}. { user.name}</li>
                        ))}
                        </ul>
                </Row>
            </Container>

        </div>
    )
}

export default Users;
