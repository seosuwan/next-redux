import { Layout, Home } from '@/components'
import React, {useEffect , useState} from 'react';
import axios from "axios";
import styles from '../styles/Home.module.css'
import { wrapper } from '@/modules/store';
import { END } from "redux-saga";
import LOAD_MY_INFO_REQUEST from '@/modules/auth/login'
import { connect,useDispatch ,useSelector} from 'react-redux';
import {loadMyInfReq} from '@/modules/auth/login';


const HomePage = () => {
  console.log("ㅎㅎㅎㅎㅎㅎㅎㅎㅎ")
   const [user, setUser] = useState({userid: '', password: ''})
    const dispatch = useDispatch()
  
    const {isLoggined, loginUser} = useSelector(state => state.login)
    useEffect(() => {
      isLoggined ?
      dispatch( loadMyInfReq(setUser))
      :
      <></>
  },[])  
return (
  
  isLoggined ? 
    <Layout>
    <Home loginUser={loginUser} />
    </Layout> :
     <Layout>
     <Home/>
     </Layout>
   
     
 )
}
//서버에서 실행시키는 함수 getServerSideProps

export const getServerSideProps = wrapper.getServerSideProps ((store) => async ({ req,res }) => {

        
  res.setHeader(
    'Set-Cookie',
    `token = yourToken; Expires=Wed; Secure; HttpOnly; SameSite=Strict`
);

  console.log(`req.headers = ${JSON.stringify(req.headers.cookie)}`)

  const cookie = req ? req.headers.cookie : '';

  
  axios.defaults.headers.Cookie = '';
  
  if (req && cookie) {

    axios.defaults.headers.Cookie = cookie;
    console.log(`axios.defaults.headers.Cookie = ${axios.defaults.headers.Cookie}`)
  }
  // 유저 정보 요청
  if(cookie !== null || undefined){
    console.log("??실행되니??")
    store.dispatch({
      type: LOAD_MY_INFO_REQUEST
    });
  

  }

    store.dispatch(END);

    // await store.sagaTask.toPromise();     

  // return {
  //   props: Home({req}),
  // };
});
const mapStateToProps = state => ({loginUser: state.login.loginUser})
const loginActions = {loadMyInfReq}
export default connect(mapStateToProps, loginActions)(HomePage);