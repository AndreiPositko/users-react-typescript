import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { WaveLoading } from 'react-loadingg';
import { Container, Row, Col } from 'react-bootstrap';

import routes from '../../../../constants/routes';
import { getPostsRequest } from '../../../../store/posts/actions';

import global from '../../../../common-style/global.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Posts = () => {

    const dispatch = useDispatch();
    
    const { posts, loading } = useSelector(state => ({
        posts: state.posts.posts,
        loading: state.posts.loading,
    }))
    
    useEffect(() => {
        if (posts.length > 0) return;
        dispatch(getPostsRequest());
    }, [dispatch, posts.length]);

    return(
        <div>
            <Container className={ global.component_container }>
                 <Row>
                    {loading && <WaveLoading color='yellow' size='large' />}
                    <Col>
                        <h2 className={global.main_title}>Posts</h2>
                        <ul className={ global.users_list}>
                            {posts.map((post) => (
                                <li key={post.id} className={global.list_item}><Link to={`${routes.posts}/${post.id}`}>{ post.id}. { post.title }</Link></li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Posts;
