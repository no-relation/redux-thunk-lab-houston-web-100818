import { combineReducers } from "redux";
import { cats_reducer } from "./cats_reducer"

export const rootReducer = combineReducers({ 
    cats: cats_reducer
})

