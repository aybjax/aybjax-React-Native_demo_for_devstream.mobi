import {fetchPageSaga} from './sagas'
import {takeLatest} from 'redux-saga/effects'
import  * as actionTypes from '../helpers/actionTypes'

export function* watchFetching()
{
    yield takeLatest(actionTypes.START_ADDING, fetchPageSaga)
}