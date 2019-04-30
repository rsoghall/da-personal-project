import {createStore} from 'redux'



const initialState = {
    centers: [],
    staff: [],
    forms: [],
    events: [],
    role: 'users',
    centerId: 0
}
const GET_EVENTS = 'GET_EVENTS'
const GET_FORMS = 'GET_FORMS'
const GET_CENTERS = 'GET_CENTERS'
const GET_STAFF = 'GET_STAFF'
const SET_USER = 'SET_USER'

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

export function setUser(payload){
    return {
        type: SET_USER,
        payload: payload
    }
}

export function getForms(payload){
    return {
        type: GET_FORMS,
        payload: payload
    }
}

export function getEvents(payload){
    return {
        type: GET_EVENTS,
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
        case SET_USER:{
            return{...state, role: action.payload.role, centerId: action.payload.centerId}
        }
        case GET_FORMS:{
            return{...state, form: action.payload.form, centerId: action.payload.centerId}
        }
        case GET_EVENTS:{
            return{...state, form: action.payload.form, centerId: action.payload.centerId}
        }
        default: return state
    }
}

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())