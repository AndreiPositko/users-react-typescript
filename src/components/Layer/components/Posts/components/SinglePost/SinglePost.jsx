import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, useRouteMatch, Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { WaveLoading } from 'react-loadingg';
import { Button } from 'react-bootstrap';

import { getPostRequest, editPostRequest, postReset } from '../../../../../../store/posts/actions';
import routes from './../../../../../../constants/routes';

import global from '../../../../../../common-style/global.module.scss';

const SinglePost = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { url } = useRouteMatch();
    const { id } = useParams();

    
    const { singlePost, loading } = useSelector(state => ({
        singlePost: state.posts.singlePost,
        loading: state.posts.loading,
    }))

    useEffect(() => {
        dispatch(getPostRequest(id));
        
        return (() => {
            dispatch(postReset());
        })
    }, [dispatch, id]);

    const editSinglePost = (data) => {
        dispatch(editPostRequest({...data, id}))
        history.push(`${url}/edit`);
    }

    return (
        <div>
            <Container>
                <Row>
                    {loading ? <WaveLoading color='yellow' size='large' position='top' /> :
                        singlePost.id ?
                        <Col>
                            <div className={global.list_header}>
                                <h2 className={global.main_title}>User № {singlePost.id}</h2>
                                <Button variant="warning" onClick={() => editSinglePost(singlePost.id)}>Edit User</Button>
                            </div>
                            <ul className={global.data_list}>
                                <li className={global.list_item}><span className={global.item}>post title:</span> {singlePost.title}</li>
                                <li className={global.list_item}><span className={global.item}>post body:</span> {singlePost.body}</li>
                            </ul>
                        </Col>
                        :
                        <Col>
                            <div className={global.user_error}>
                                <p>There is no such user!</p>
                                <Link to={routes.users} className={global.link_error}>Back to Users</Link>
                            </div>
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    )
};

export default SinglePost;
