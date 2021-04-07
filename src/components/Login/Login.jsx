import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { logIn, logOut } from '../../store/auth/actions';
import routes from '../../constants/routes';

import LoginStyled from './styled';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Login = () => {

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const { userName, password } = useSelector(state => ({
        userName: state.auth.userName,
        password: state.auth.password,
    }))

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (data.email === userName && data.password === password) {
            dispatch(logIn());
            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);
            history.push(routes.main);
        } else {
            dispatch(logOut());
            notify();
        }
    }

    const notify = () => {
        toast.error('Wrong credentials!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000});
    }
    
    return (
        <LoginStyled.MainBg>
            <LoginStyled.Form onSubmit={handleSubmit(onSubmit)}>
                <LoginStyled.Title>Entrance</LoginStyled.Title>
                
                <LoginStyled.Label>Login</LoginStyled.Label>
                    <LoginStyled.Input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        ref={register({ required: true, minLength: 4 })} />
                    
                    {errors.email && errors.email.type === 'required' && <LoginStyled.Error>This field is required</LoginStyled.Error>}
                    {errors.email && errors.email.type === 'minLength' && <LoginStyled.Error>This field is required minLength of { 4 } symbols</LoginStyled.Error>}

                <LoginStyled.Label>Password</LoginStyled.Label>
                <LoginStyled.Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    ref={register({ required: true, minLength: 4 })} />
                
                {errors.password && errors.password.type === 'required' && <LoginStyled.Error>This field is required</LoginStyled.Error>}
                {errors.password && errors.password.type === 'minLength' && <LoginStyled.Error>This field is required minLength of { 4 } symbols</LoginStyled.Error>}

                <LoginStyled.BtnSubmit title="Login" color="green" type="submit" value='Submit'/>
                
                {/* <Link to={routes.registration} style={{ textDecoration: 'none' }}>
                     <LoginStyled.LinkReg>Registration</LoginStyled.LinkReg>
                </Link>
                
                <Link to={routes.forgotPass} style={{ textDecoration: 'none' }}>
                     <LoginStyled.LinkForgot>Forgot your password?</LoginStyled.LinkForgot>
                </Link> */}

            </LoginStyled.Form>
        </LoginStyled.MainBg>
    )
}

export default Login;
