import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { WaveLoading } from 'react-loadingg';

import { getPostRequest, postReset } from '../../../../store/posts/actions';

import global from '../../../../common-style/global.module.scss';

const SinglePost = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getPostRequest(id));
        
        return (() => {
            dispatch(postReset());
        })
    }, [dispatch, id])

    const { post, loading } = useSelector(state => ({
        post: state.posts.singlePost,
        loading: state.posts.loading,
    }))

    return (
        <div>
            <Container>
                <Row>
                    {loading && <WaveLoading color='yellow' size='large' position='top' />}
                    <Col>
                        <h2 className={global.main_title}>Post № { post.id }</h2>
                        <ul className={ global.data_list}>
                            <li className={global.list_item}><span className={global.item}>post title:</span> { post.title }</li>
                            <li className={global.list_item}><span className={global.item}>post body:</span> { post.body }</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default SinglePost;
