import {put} from 'redux-saga/effects'
import  * as actionTypes from '../helpers/actionTypes'

/* appstate */
export const startFetching = () =>
{
    return { type: actionTypes.START_FETCHING }
}

export const endFetching = () =>
{
    return { type: actionTypes.END_FETCHING }
}


/* images */
export const fetchStore = () =>
{
    return {type:  actionTypes.FETCH_STORE}
}

export const addStore = (payload) =>
{
    return {type: actionTypes.ADD_STORE, payload: payload}
}

export const fetchImage = (id) =>
{
    return {type: actionTypes.FETCH_IMAGE, id}
}