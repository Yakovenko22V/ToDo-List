import { combineReducers } from "@reduxjs/toolkit";
import { reducer as reducersAll } from './statesReducer/reducerArrTask';

export const reducers = combineReducers({
    reducersAll
});