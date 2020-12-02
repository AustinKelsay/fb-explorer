import {GET_INDEX_HTML, POPULATE_CATEGORIES, USER_DATA, POPULATE_IMAGES, POPULATE_VIDEO } from "./Actions"

const initialState = {
    index: {},
    categories: [],
    images: [],
    video: [],
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
        case POPULATE_IMAGES: {
            return {...state, images: [...state.images, action.payload]}
        }
        case POPULATE_VIDEO: {
            return {...state, video: [...state.video, action.payload]}
        }
        case USER_DATA: {
            console.log(state)
            return {...state, userData: true}
        }
        default: return state;
    }
}