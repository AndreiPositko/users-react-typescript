import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouteMatch, useHistory, Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { WaveLoading } from 'react-loadingg';
import { Button } from 'react-bootstrap';

import routes from '../../../../../../constants/routes';
import { postReset } from '../../../../../../store/posts/actions';

import global from '../../../../../../common-style/global.module.scss';

const SinglePost = () => {

    const [currentPost, setCurrentPost] = useState({});

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const { url } = useRouteMatch();

    const { posts, loading } = useSelector(state => ({
        posts: state.posts.posts,
        loading: state.posts.loading,
    }))

    useEffect(() => {
        const currPost = posts.find(post => post.id === +id);
        setCurrentPost(currPost)

        return (() => {
            dispatch(postReset());
        })
    }, [dispatch, posts, id])

    const editCurrentPost = () => {
        history.push(`${url}/edit`);
    }

    return (
        <div>
            <Container>
                <Row>
                    {loading ? <WaveLoading color='yellow' size='large' position='top' /> :
                        currentPost.id ?
                        <Col>
                            <div className={global.list_header}>
                                <h2 className={global.main_title}>Post № {currentPost.id}</h2>
                                <Button variant="warning" onClick={() => editCurrentPost()}>Edit Post</Button>
                            </div>
                            <ul className={global.data_list}>
                                <li className={global.list_item}><span className={global.item}>post title:</span> {currentPost.title}</li>
                                <li className={global.list_item}><span className={global.item}>post body:</span> {currentPost.body}</li>
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
};

export default SinglePost;
