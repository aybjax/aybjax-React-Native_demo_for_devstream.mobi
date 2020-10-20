import  * as actionTypes from '../helpers/actionTypes'

export const storeReducer = (state = [], action) => {
    switch(action.type)
    {
        case actionTypes.ADD_STORE:
            return [...state, ...action.payload]
        default:
            return state
    }
}

const init = {
    fetching: false,
    page: 1,
}

export const appReducer = (state = init, action) => {
    switch(action.type)
    {
        case actionTypes.START_FETCHING:
            return {...state, fetching: true, error: false}
        case actionTypes.END_FETCHING:
            return {error: false, page: state.page+1, fetching:false}
        default:
            return state
    }
}