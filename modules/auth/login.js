import {createAction, handleActions} from 'redux-actions';
import {
    call,
    delay,
    put,
    takeLatest,
    select,
    throttle
} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'
import { createBrowserHistory } from 'history'


const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
    withCredentials: true 
}
export const initialState = {
    loginUser: null,
    isLoggined: false,
    token: '',
    loginError: null,
}
    
    

const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGIN_CANCELLED = 'auth/LOGIN_CANCELLED';
const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';
const SAVE_TOKEN = 'auth/SAVE_TOKEN';
const DELETE_TOKEN = 'auth/DELETEE_TOKEN';
const LOAD_MY_INFO_REQUEST = 'auth/LOAD_MY_INFO_REQUEST'
const LOAD_MY_INFO_SUCCESS = 'auth/LOAD_MY_INFO_SUCCESS'
const LOAD_MY_INFO_FAILURE = 'auth/LOAD_MY_INFO_FAILURE'


export const loginRequest = createAction(LOGIN_REQUEST, data => data)
export const loginCancelled = createAction(LOGIN_CANCELLED, data => data)
export const logoutRequest = createAction(LOGOUT_REQUEST)
export const loadMyInfReq = createAction(LOAD_MY_INFO_REQUEST, data => data)

export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, signin);
    yield takeLatest(LOGIN_CANCELLED, loginCancel);
    yield takeLatest(LOGOUT_REQUEST, logout);
    yield takeLatest(LOAD_MY_INFO_REQUEST,loadMyInfo)
}
const loadMyInfoAPI = () => axios.get(
    
    `${SERVER}/user/loadMyInfoAPI`,
    {},
    {headers},

)


  function* loadMyInfo(action) {
      console.log("LOAD_MY_INFO_SUCCESS")
      try {
        const response = yield call(loadMyInfoAPI, action.payload)
        const result = response.data
        yield put({type: LOAD_MY_INFO_SUCCESS, payload: result})
        yield put({type: SAVE_TOKEN, payload: result.token})

    
        cookie.save("accessToken", accessToken, {
            path: "/",
          });
        
    }catch (error) {
        yield put({type: LOGIN_FAILURE, payload: error.message})
    }
}
 
function* signin(action) {
    try {
        const response = yield call(loginAPI, action.payload)
        const result = response.data
        yield put({type: LOGIN_SUCCESS, payload: result})
        yield put({type: SAVE_TOKEN, payload: result.token})
        // const token = response.headers['set-cookie']
        // res.setHeader('Set-Cookie', `token=${token}; path=/;`)
        
    }catch (error) {
        yield put({type: LOGIN_FAILURE, payload: error.message})
    }
}
const loginAPI = payload => axios.post(
    
    `${SERVER}/user/login`,
    payload,
    {headers},

)
function* logout(){
    try{
        alert(' logout 실행중 ')
        const response = yield call(logoutAPI)
        alert(` 로그아웃 성공: ${response.data.message}`)
        yield put({type: LOGOUT_SUCCESS})
        yield put({type: DELETE_TOKEN})
        yield put(window.location.href= "/")
    }catch(error){
        console.log(` 로그아웃 실패: ${error}`)
        yield put({type: LOGOUT_FAILURE})
    }
}

const logoutAPI = () => axios.get(
    `${SERVER}/user/logout`,
    {},
    {headers}
)

function* loginCancel(action) {
    try {
        console.log(`로그인 취소`)
    } catch (error) {}
}


const login = handleActions({
    
    [HYDRATE]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        loginUser: action.payload,
        isLoggined: true
    }),
    [LOGIN_FAILURE]: (state, action) => ({
        ...state,
        loginError: action.payload
    }),
    [SAVE_TOKEN]: (state, action) => ({
        ...state,
        token: action.payload
    }),
    [DELETE_TOKEN]: (state, action) => ({
        ...state,
        token: ''
    }),
    [LOGOUT_SUCCESS]: (state, _action) => ({
        ...state,
        loginUser: null,
        isLoggined: false
    }),
    [LOAD_MY_INFO_REQUEST] : (state, action) =>({
        ...state,
        loginUser: action.payload,
        // token: action.payload,
        isLoggined: true
    }),
    [LOAD_MY_INFO_FAILURE] : (state, action) =>({
        ...state,
        loginError: action.payload
    })
}, initialState)
/**
const login = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log(' ### HYDRATE Issue 발생 ### ')
            return {
                ...state,
                ...action.payload
            }
        case LOGIN_SUCCESS:
            alert(' ### 사가 로그인 성공 ### ' + JSON.stringify(action.payload))
            return {
                ...state,
                loginUser: action.payload,
                isLoggined: true
            }
        case LOGIN_FAILURE:
            console.log(' ### 로그인 실패 ### ' + action.payload)
            return {
                ...state,
                loginUser: action.payload
            }
        default:
            return state;
    }
}
 */
export default login