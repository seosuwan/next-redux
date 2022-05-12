
// import { END } from "redux-saga";
// import cookie from "cookie";
// import {loadMeRequest, setToken, refreshTokenRequest  } from "./user_saga";

// export const stayLoggedIn = async (store) => {
//     console.log("auth.js==========================")
//   const parsedCookies = store.getState()
//   console.log("auth.js==========================22222",store.getState)
//     ? cookie.parse(store.req.headers.cookie || "")
//     : ""; // 서버라면 쿠키 확인
//   if (parsedCookies) {
//     if (parsedCookies["access-token"]) {
//       // 액세스 토큰이 있으면 액세스 토큰으로 사용자 정보 불러옴
//       store.dispatch(
//         loadMeRequest({
//           accessToken: parsedCookies["access-token"],
//         })
//       );
//     } else if (parsedCookies["refresh-token"]) {
//       // refresh 토큰만 있으면 토큰 재발급 및 사용자 정보 재요청
//       store.dispatch(
//         refreshTokenRequest({
//           refreshToken: parsedCookies["refresh-token"],
//         })
//       );
//     }
//   }
//   store.dispatch(END);
// //   await store.sagaTask.toPromise(); // 기다림
// //   const {
// //     id,
// //     accessToken,
// //     refreshToken,
// //     setCookie,
// //   } = store.store.getState().user;
// //   if (id) { // 사용자 정보 재요청된 경우
// //     if (accessToken && refreshToken) {
// //       // refresh한 경우 쿠키 다시 세팅
// //       store.res.setHeader("Set-Cookie", setCookie); // setCookie는 refresh 요청 이후 리덕스에 저장해둠
// //     } else {
// //       // access token으로 요청한 경우 현재 토큰 리덕스에 담아둠
// //       store.dispatch(
// //         setToken({
// //           accessToken: parsedCookies["access-token"],
// //           refreshToken: parsedCookies["refresh-token"],
// //         })
// //       );
// //     }
// //     store.dispatch(END);
// //     await store.sagaTask.toPromise();
// //   }
// };