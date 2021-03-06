import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {loginRequest} from '@/modules/auth/login';
import {Login, Profile} from '@/components';
import {useRouter} from "next/router"
import { useSelector } from 'react-redux';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
const LoginPage = ({}) => {
    console.log("페이지 로그인 1")
    const [user, setUser] = useState({userid: '', password: ''})
    const dispatch = useDispatch()

    const onChange = e => {
        console.log("페이지 로그인 온체인지")
        e.preventDefault()
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const {isLoggined, loginUser} = useSelector(state => state.login)
    const onSubmit = e => {
        console.log("페이지 로그인 서브밋")
        e.preventDefault()
        alert(`로그인 정보 ${JSON.stringify(user)}`)
        console.log(history)
        dispatch( loginRequest(user))
        console.log(' 모듈에 저장된 로그인값: '+JSON.stringify(loginUser))
        // router.push('/user/profile') 이동시 데이터 소실
    }

    return (
        isLoggined ? 
        <Profile loginUser={loginUser}/>
      : <Login onChange={onChange} onSubmit={onSubmit}/>);
};
const mapStateToProps = state => ({loginUser: state.login.loginUser})
const loginActions = {loginRequest}
export default connect(mapStateToProps, loginActions)(LoginPage);