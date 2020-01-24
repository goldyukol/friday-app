import React, {ChangeEvent, useState} from 'react';
import {signIn, signInAC} from "../Redux/Reducers/LoginReducer";
import {connect} from "react-redux";

interface IProps {

};

const Login = (props: any) => {

    const [email, setEmail] = useState('');
    let onChangeEmail = ((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    });

    const [password, setPassword] = useState('');
    let onChangePassword = ((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    });

    const [remember, setRemember] = useState(false);
    let onChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setRemember(e.currentTarget.checked)
    }

    const signInClick = () => {

        props.signIn(email, password, remember)
    }

    return (
        <div>
            <h1> SignIn </h1>
            <span> e-mail </span> <input onChange={onChangeEmail} value={email}/>
            <div>
                <span> password </span> <input type='password' onChange={onChangePassword} value={password}/>
            </div>
            <a href='/forgot'> Forgot password</a>
            <div>
                <input type='checkbox' checked={remember} onChange={onChecked}/> <span>Remember me</span>
            </div>
            <button type='submit' onClick={signInClick}>Sign in</button>
            <div>
                <a href='#'> Registration</a>
            </div>
        </div>
    )

};

const mapStateToProps = (state: any) => {
    return {
        email: state.email,
        password: state.password,
        rememberMe: state.rememberMe
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signIn: (email: string, password: string, rememberMe: boolean) => {
            dispatch(signIn(email, password, rememberMe))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)