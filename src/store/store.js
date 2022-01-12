import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './reducers/combineReducers';

export const store = configureStore({
    reducer: reducers
});