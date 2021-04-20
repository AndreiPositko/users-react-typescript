import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';

import { editPhotoRequest } from '../../../../../../store/photos/actions';
import { MIN_LENGTH } from '../../../../../../constants/form';
import routes from '../../../../../../constants/routes';

import global from '../../../../../../common-style/global.module.scss';

const EditPhoto = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const { errors, handleSubmit, register } = useForm();

  const { photo } = useSelector((state) => ({
    photo: state.photos.singlePhoto,
  }));

  const onSubmit = (data) => {
    dispatch(editPhotoRequest({ ...data, id }));
    history.push(routes.photos);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className={global.main_title}>Edit Phtoto № {photo.id}</h2>
            <div className={global.form_wrapper}>
              <form
                className={global.edit_form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={global.input_group}>
                  <label htmlFor="Hello">Photo title</label>
                  <input
                    className={global.form_input}
                    name="title"
                    placeholder="enter title"
                    defaultValue={photo.title}
                    ref={register({ required: true, minLength: MIN_LENGTH })}
                  />
                  {errors.title && errors.title.type === 'required' && (
                    <p className={global.input_error}>This field is required</p>
                  )}
                  {errors.title && errors.title.type === 'minLength' && (
                    <p className={global.input_error}>
                      This field is required minLength of {MIN_LENGTH}
                    </p>
                  )}
                </div>
                <div className={global.input_group}>
                  <label htmlFor="Hello">Photo Url</label>
                  <textarea
                    className={global.form_input}
                    name="url"
                    placeholder="enter body"
                    defaultValue={photo.url}
                    ref={register({ required: true, minLength: MIN_LENGTH })}
                  />
                  {errors.body && errors.body.type === 'required' && (
                    <p className={global.input_error}>This field is required</p>
                  )}
                  {errors.body && errors.body.type === 'minLength' && (
                    <p className={global.input_error}>
                      This field is required minLength of {MIN_LENGTH}
                    </p>
                  )}
                </div>
                <input
                  className={global.button_submit}
                  type="submit"
                  value="Edit"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditPhoto;
