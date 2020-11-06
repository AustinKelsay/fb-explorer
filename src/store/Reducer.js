import {GET_INDEX_HTML, POPULATE_CATEGORIES, SHOW_STORE } from "./Actions"

const initialState = {
    index: {},
    categories: []
}

export function Reducer (state = initialState, action) {
    switch(action.type) {
        case GET_INDEX_HTML: {
            return {...state, index: action.payload}
        }
        case POPULATE_CATEGORIES: {
           return {...state, categories: [...state.categories, action.payload]}
        }
        case SHOW_STORE: {
            console.log(state)
        }
        default: return state;
    }
}