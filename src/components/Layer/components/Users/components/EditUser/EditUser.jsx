import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import routes from './../../../../../../constants/routes';
import { getUserRequest, editUserRequest } from './../../../../../../store/users/actions';
import { MIN_LENGTH } from '../../../../../../constants/form';

import global from '../../../../../../common-style/global.module.scss';

const EditUser = () => {

    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const { user } = useSelector(state => ({
        user: state.users.singleUser,
    }))

    useEffect(() => {
        dispatch(getUserRequest(id))
    }, [dispatch, id])

    const onSubmit = (data) => {
        dispatch(editUserRequest({ ...data, id }));
        history.push(routes.users);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className={global.main_title}>Edit User № { id }</h2>
                        {user.id &&
                            <div className={global.form_wrapper}>
                                <form className={global.edit_form} onSubmit={handleSubmit(onSubmit)}>
                                    <div className={global.input_group}>
                                        <label htmlFor="Hello">Name</label>
                                        <input
                                            className={global.form_input}
                                            name="name"
                                            placeholder="enter user's name"
                                            defaultValue={ user.name }
                                            ref={register({ required: true, minLength: MIN_LENGTH })} />
                                        {errors.name && errors.name.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                        {errors.name && errors.name.type === 'minLength' && <p className={global.input_error}>This field is required minLength of {MIN_LENGTH}</p>}
                                    </div>
                                    <div className={global.input_group}>
                                        <label htmlFor="Hello">UserName</label>
                                        <input
                                            className={global.form_input}
                                        name="username"
                                        placeholder="enter usersname"
                                            defaultValue={user.username}
                                            ref={register({ required: true, minLength: MIN_LENGTH })} />
                                        {errors.username && errors.username.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                        {errors.username && errors.username.type === 'minLength' && <p className={global.input_error}>This field is required minLength of { MIN_LENGTH }</p>}
                                    </div>
                                    <div className={global.input_group}>
                                        <label htmlFor="Hello">Email</label>
                                        <input
                                            className={global.form_input}
                                        name="email"
                                        placeholder="enter user's email"
                                            defaultValue={user.email}
                                            ref={register({ required: true, minLength: MIN_LENGTH })} />
                                        {errors.email && errors.email.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                        {errors.email && errors.email.type === 'minLength' && <p className={global.input_error}>This field is required minLength of { MIN_LENGTH }</p>}
                                    </div>
                                    <div className={global.input_group}>
                                        <label htmlFor="Hello">Phone</label>
                                        <input
                                            className={global.form_input}
                                        name="phone"
                                        placeholder="enter user's phone"
                                            defaultValue={user.phone}
                                            ref={register({ required: true, minLength: MIN_LENGTH })} />
                                        {errors.phone && errors.phone.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                        {errors.phone && errors.phone.type === 'minLength' && <p className={global.input_error}>This field is required minLength of { MIN_LENGTH }</p>}
                                    </div>
                                    <div className={global.input_group}>
                                        <label htmlFor="Hello">City</label>
                                        <input
                                            className={global.form_input}
                                        name="city"
                                        placeholder="enter user's city"
                                            defaultValue={user.address.city}
                                            ref={register({ required: true, minLength: MIN_LENGTH })} />
                                        {errors.city && errors.city.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                        {errors.city && errors.city.type === 'minLength' && <p className={global.input_error}>This field is required minLength of { MIN_LENGTH }</p>}
                                    </div>
                                    <div className={global.input_group}>
                                        <label htmlFor="Hello">Street</label>
                                        <input
                                            className={global.form_input}
                                        name="street"
                                        placeholder="enter user's street"
                                            defaultValue={user.address.street}
                                            ref={register({ required: true, minLength: MIN_LENGTH })} />
                                        {errors.street && errors.street.type === 'required' && <p className={global.input_error}>This field is required</p>}
                                        {errors.street && errors.street.type === 'minLength' && <p className={global.input_error}>This field is required minLength of { MIN_LENGTH }</p>}
                                    </div>                          
                                    <input className={global.button_submit} type="submit" value='Edit'/>
                                </form>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>           
        </div>
    )
};

export default EditUser;
