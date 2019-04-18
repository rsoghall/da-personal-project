import {createStore} from 'redux'



const initialState = {
    centers: [],
    staff: []
}
const GET_CENTERS = 'GET_CENTERS'
const GET_STAFF = 'GET_STAFF'

export function getCenters(payload){
    return {
        type: GET_CENTERS,
        payload: payload
    }
}

export function getStaff(payload){
    return {
        type: GET_STAFF,
        payload: payload
    }
}

function reducer(state=initialState, action) {
    switch(action.type){
        case GET_CENTERS: {
            return {...state, centers: action.payload}
        }
        case GET_STAFF:{
            return{...state, staff: action.payload}
        }
        default: return state
    }
}

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())