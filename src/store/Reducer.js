import {GET_INDEX_HTML, POPULATE_CATEGORIES, POPULATE_FILES, SHOW_STORE } from "./Actions"

const initialState = {
    index: {},
    files: {},
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
        case POPULATE_FILES: {
            return {...state, files: {...state.files, [action.payload.name]: action.payload.data}}
        }
        case SHOW_STORE: {
            console.log(state)
        }
        default: return state;
    }
}