// import {createAction, handleActions} from 'redux-actions';
// import produce from "immer";
// import {
//     call,
//     delay,
//     put,
//     takeLatest,
//     select,
//     throttle
// } from 'redux-saga/effects';

// const SERVER = 'http://127.0.0.1:5000'
// const headers =  {
//     Authorization: refreshToken,
// }

// export const initialState = {
//   loginUser: null,
  
  
  
// };

// export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
// export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
// export const REFRESH_TOKEN_FAILURE = "REFRESH_TOKEN_FAILURE";
// // export const LOAD_ME_REQUEST = "LOAD_ME_REQUEST";
// // export const LOAD_ME_SUCCESS = "LOAD_ME_SUCCESS";
// // export const LOAD_ME_FAILURE = "LOAD_ME_FAILURE";
// // export const SET_TOKEN = "SET_TOKEN";
// // 액션

// export const refreshTokenRequest = createAction(REFRESH_TOKEN_REQUEST, data => data)

// function refreshTokenAPI() {
//     console.log("refreshTokenAPI")
//     `${SERVER}/user/login`,
//   payload,
//   {headers}
//   }
  
//   function* refreshToken(action) {
//     console.log("refreshTokenAPI 222")
//     try {
//       const result = yield call(refreshTokenAPI, action.payload);
//       const { refreshToken } = result.data.data;
//       const setCookie = result.headers["set-cookie"]; // 응답 쿠키 저장
//       yield put(
//         refreshTokenSuccess({ refreshToken, setCookie })
//       );
//     } catch (err) {
//       // yield put(refreshTokenFailure());
//       console.log(err)
//     }
//   }
  
//   export function* userSaga() {
//       console.log("user saga")
//       yield takeLatest(REFRESH_TOKEN_REQUEST, refreshToken)
  
//   }
//     export const refreshTokenSuccess = (payload) => ({
//       type: REFRESH_TOKEN_SUCCESS,
//       payload,
//     });
    
//     const user = (state = initialState, action) =>
//       produce(state, (draft) => {
//         switch (action.type) {
//           case REFRESH_TOKEN_REQUEST:
//             console.log("user 토큰")
//             break;
//           case REFRESH_TOKEN_SUCCESS: // 요청 성공 시 회원 정보, 토큰값, 응답 쿠키값 저장
//             draft.loginUser = action.payload.loginUser;
//             draft.accessToken = action.payload.accessToken;
//             draft.refreshToken = action.payload.refreshToken;
//             draft.setCookie = action.payload.setCookie;
//             break;
//           // case REFRESH_TOKEN_FAILURE: // 실패시 로그아웃 처리..
//           //   draft.id = 0;
//           //   draft.uid = "";
//           //   draft.username = "";
//           //   draft.nickname = "";
//           //   draft.createdAt = "";
//           //   draft.modifiedAt = "";
//           //   draft.accessToken = "";
//           //   draft.refreshToken = "";
//           //   break;
//           // case LOAD_ME_REQUEST:
//           //   break;
//           // case LOAD_ME_SUCCESS: // 사용자 정보 저장
//           //   draft.id = action.payload.info.id;
//           //   draft.uid = action.payload.info.uid;
//           //   draft.username = action.payload.info.username;
//           //   draft.nickname = action.payload.info.nickname;
//           //   draft.createdAt = action.payload.info.createdAt;
//           //   draft.modifiedAt = action.payload.info.modifiedAt;
//           //   break;
//           // case LOAD_ME_FAILURE:
//           //   break;
//           // case SET_TOKEN: // 토큰 값 저장
//           //   draft.accessToken = action.payload.accessToken;
//           //   draft.refreshToken = action.payload.refreshToken;
//           // default:
//           //   break;
//         }
//       });
    
//     export default user;
