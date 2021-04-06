import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import routes from '../../../../../../constants/routes';
import { editPostRequest } from '../../../../../../store/posts/actions';
import { MIN_LENGTH } from '../../../../../../constants/form';

import global from '../../../../../../common-style/global.module.scss';

const EditPost = () => {

    const [currentPost, setCurrentPost] = useState({});

    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();
    const dispatch = useDispatch()
    const { id } = useParams();

    const { posts } = useSelector(state => ({
        posts: state.posts.posts,
    }));

    useEffect(() => {
        const currPost = posts.find(post => post.id === +id)
        setCurrentPost(currPost)
    }, [posts, id])

    const onSubmit = (data) => {
        dispatch(editPostRequest({ ...data, id }));
        history.push(routes.posts);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className={global.main_title}>Edit Post № { id }</h2>
                        <div className={global.form_wrapper}>
                            <form className={global.edit_form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={global.input_group}>
                                    <label htmlFor="Hello">Post title</label>
                                    <input
                                        className={global.form_input}
                                        name="title"
                                        placeholder="enter title"
                                        defaultValue={currentPost.title}
                                        ref={register({ required: true, minLength: MIN_LENGTH })} />
                                    {errors.title && errors.title.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                    {errors.title && errors.title.type === 'minLength' && <p className={global.input_error}>This field is required minLength of {MIN_LENGTH}</p>}
                                </div>
                                <div className={global.input_group}>
                                    <label htmlFor="Hello">Post Body</label>
                                    <textarea
                                        className={global.form_input}
                                        name="body"
                                        placeholder="enter body"
                                        defaultValue={currentPost.body}
                                        ref={register({ required: true, minLength: MIN_LENGTH })} />
                                    {errors.body && errors.body.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                    {errors.body && errors.body.type === 'minLength' && <p className={global.input_error}>This field is required minLength of { MIN_LENGTH }</p>}
                                </div>                        
                                <input className={global.button_submit} type="submit" value='Edit'/>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>           
        </div>
    )
};

export default EditPost;
