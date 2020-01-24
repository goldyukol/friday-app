import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import s from './Register.module.css'
import { register } from '../../Redux/Reducers/RegisterReducer';

interface IProps {

}

const Register = (props: IProps) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch()

    const sendRegisterData = () => {
        debugger
        dispatch(register(email, password))
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    return (<div className={s.wrapper}>
        <div>Register</div>
        <input value={email} onChange={onChangeEmail}></input>
        <input type='password' value={password} onChange={onChangePass}></input>
        <input type='password' value={password}></input>
        <button onClick={sendRegisterData}>Register</button>
        <a href="#/sign-in">Sign In</a>
    </div>)
};

export default Register;