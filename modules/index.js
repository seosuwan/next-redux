import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './basic/counter';
import register, { registerSaga } from './auth/register';
import login, { loginSaga } from './auth/login';
// import { loadMyInfReq } from './auth/login';
import {HYDRATE} from "next-redux-wrapper"
// import LOAD_MY_INFO_REQUEST from './auth/login'

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log("HYDRATE INDEX", JSON.stringify(action));
                return { ...state, ...action.payload };
            // case LOAD_MY_INFO_REQUEST :
            //       console.log('로드마이인포 리퀘스트 다녀감!');
            //     return  { ...state, ...action.payload };
            default:
                return state;
        }
    },
    counter,
    login,
    register
    // loadMyInfReq
  
    
});
export function* rootSaga() {
  yield all([counterSaga(), registerSaga(), loginSaga()]);
}

export default rootReducer;