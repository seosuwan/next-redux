import { Layout, Home } from '@/components'
import React, {useEffect} from 'react';
import axios from "axios";
import styles from '../styles/Home.module.css'
import { wrapper } from '@/modules/store';
import { END } from "redux-saga";
import cookie from "cookie";
// import { stayLoggedIn } from '@/modules/auth/auth';
import LOAD_MY_INFO_REQUEST from '@/modules/auth/login'


const HomePage = () => {
  
return (
    <Layout>
    <Home/>
    </Layout>
 )
}

//서버에서 실행시키는 함수 getServerSideProps

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res, ...ets }) => {

  console.log('getServerSideProps req.headers: ', req.headers);
  
  const cookie = req ? req.headers.cookie : '';
  
  console.log('cookie: ', cookie);
  
  axios.defaults.headers.Cookie = ''; // 서버에서 다른 사람과 cookie가 공유되는 문제를 방지하고자 초기화를 해준다.
  
  if (req && cookie) {
  
  axios.defaults.headers.Cookie = cookie; // 서버에서 요청일때랑 cookie가 있으면 설정한 cookie를 넣어준다.
  
  console.log('axios.defaults.headers.Cookie: ', axios.defaults.headers.Cookie);
  
  }
  
  store.dispatch({
  
  type: LOAD_MY_INFO_REQUEST,
  
  });
  
  store.dispatch(END);
  
  // await store.sagaTask.toPromise();
})

export default HomePage;