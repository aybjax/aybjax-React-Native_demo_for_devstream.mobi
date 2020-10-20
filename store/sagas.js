import {call, put} from 'redux-saga/effects'
import {getImgs} from './api'
import {parseJson} from '../helpers/functions'
import  * as actionTypes from '../helpers/actionTypes'



export function* fetchPageSaga(action){
    let newData
    try
    {
        const data = yield call(getImgs, action.page)
        yield newData = parseJson(data)
        yield put({type: actionTypes.ADD_STORE, payload: newData})
    }
    catch(err){}
    yield put({type: actionTypes.END_FETCHING})
}