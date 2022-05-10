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
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => 
    async ({ req, res, ...etc }) => {
      const parsedCookie = store
      const cookies = parsedCookie.getState().login
      //   ? store || cookies
      //   : "";
      //   console.log("????")
      // // if (store && cookies) {
      // //   console.log("?????")
      //   if (cookies["accessToken"]) {
          console.log("???????")
            store.dispatch({
            type: LOAD_MY_INFO_REQUEST,
            data: cookies["accessToken"],
          });
        // }
      // }
    store.dispatch(END);
    // await store.sagaTask.toPromise();
  }
);
// export const getServerSideProps = wrapper.getServerSideProps(
//     (action) => 
//     async ({ req, res, ...etc }) => {
//         console.log("토큰있냐구")
//       await stayLoggedIn(action);
//     }
//   );
export default HomePage;