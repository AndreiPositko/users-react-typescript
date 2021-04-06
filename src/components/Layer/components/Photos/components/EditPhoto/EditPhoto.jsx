import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';

import { MIN_LENGTH } from './../../../../../../constants/form';
import { editPhotoRequest } from '../../../../../../store/photos/actions';
import routes from '../../../../../../constants/routes';

import global from '../../../../../../common-style/global.module.scss';

const EditPhoto = () => {

    const { errors, handleSubmit, register } = useForm();

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const [currentPhoto, setCurrentPhoto] = useState({});

    const { photos } = useSelector(state => ({
        photos: state.photos.photos,
    }))

    useEffect(() => {
        const currPhoto = photos.find(photo => photo.id === +id);
        setCurrentPhoto(currPhoto);
    }, [photos, id])

    const onSubmit = (data) => {
        dispatch(editPhotoRequest({ ...data, id }))
        history.push(routes.photos);
        console.log('data', data);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className={global.main_title}>Edit Photo № { id }</h2>
                        <div className={global.form_wrapper}>
                            <form className={global.edit_form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={global.input_group}>
                                    <label htmlFor="Hello">Photo title</label>
                                    <input
                                        className={global.form_input}
                                        name="title"
                                        placeholder="enter title"
                                        defaultValue={currentPhoto.title}
                                        ref={register({ required: true, minLength: MIN_LENGTH })} />
                                    {errors.title && errors.title.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                    {errors.title && errors.title.type === 'minLength' && <p className={global.input_error}>This field is required minLength of {MIN_LENGTH}</p>}
                                </div>
                                <div className={global.input_group}>
                                    <label htmlFor="Hello">Photo ThumbnailUrl</label>
                                    <input
                                        className={global.form_input}
                                        name="thumb"
                                        placeholder="enter thumbnail"
                                        defaultValue={currentPhoto.thumbnailUrl}
                                        ref={register({ required: true, minLength: MIN_LENGTH })} />
                                    {errors.thumb && errors.thumb.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                    {errors.thumb && errors.thumb.type === 'minLength' && <p className={global.input_error}>This field is required minLength of { MIN_LENGTH }</p>}
                                </div>
                                <div className={global.input_group}>
                                    <label htmlFor="Hello">Photo Url</label>
                                    <input
                                        className={global.form_input}
                                        name="url"
                                        placeholder="enter url"
                                        defaultValue={currentPhoto.url}
                                        ref={register({ required: true, minLength: MIN_LENGTH })} />
                                    {errors.thumb && errors.thumb.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                    {errors.thumb && errors.thumb.type === 'minLength' && <p className={global.input_error}>This field is required minLength of { MIN_LENGTH }</p>}
                                </div> 
                                <input className={global.button_submit} type="submit" value='Edit'/>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>  
        </div>
    )
}

export default EditPhoto;
