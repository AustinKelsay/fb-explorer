import {GET_INDEX_HTML, POPULATE_CATEGORIES, USER_DATA } from "./Actions"

const initialState = {
    index: {},
    categories: [],
    userData: false
}

export function Reducer (state = initialState, action) {
    switch(action.type) {
        case GET_INDEX_HTML: {
            return {...state, index: action.payload}
        }
        case POPULATE_CATEGORIES: {
           return {...state, categories: [...state.categories, action.payload]}
        }
        case USER_DATA: {
            console.log(state)
            return {...state, userData: true}
        }
        default: return state;
    }
}