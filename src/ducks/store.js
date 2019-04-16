import {createStore} from 'redux'

const initialState = {
    centers: []
}
const GET_CENTERS = 'GET_CENTERS'
export function getCenters(payload){
    return {
        type: GET_CENTERS,
        payload: payload
    }
}
function reducer(state=initialState, action) {
    switch(action.type){
        case GET_CENTERS: {
            return {...state, centers: action.payload}
        }
        default: return state
    }
}

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())