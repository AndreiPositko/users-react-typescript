import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { WaveLoading } from 'react-loadingg';
import { Container, Row } from 'react-bootstrap';

import { getPostsRequest } from './../../../../store/posts/actions';

import global from '../../../../common-style/global.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Posts = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPostsRequest());
    }, [dispatch]);

    const { posts, loading } = useSelector(state => ({
        posts: state.posts.posts,
        loading: state.posts.loading,
    }))

    return(
        <div>
            <Container className={ global.component_container }>
                 <Row>
                    {loading && <WaveLoading color='yellow' size='large' />}
                     <h2>Posts</h2>
                    <ul className={ global.users_list}>
                        {posts.map((post) => (
                            <li key={post.id} className={global.list_item}>{ post.id}. { post.title }</li>
                        ))}
                    </ul>
                </Row>
            </Container>
        </div>
    )
}

export default Posts;
