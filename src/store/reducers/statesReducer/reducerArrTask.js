import { createSlice } from '@reduxjs/toolkit';

const reducerStates = {
    name: 'arrTaskState',
    initialState: {
        arrTask: null,
        displayedList: '',
        filteredByInput: '',
        isArrTaskLoaded: false
    },
    reducers: {
        setArrTask: (state, action) => {
            state.arrTask = action.payload;
        },
        setDisplayedList: (state, action) => {
            state.displayedList = action.payload;
        },
        setFilteredByInput: (state, action) => {
            state.filteredByInput = action.payload
        },
        setIsArrTaskLoaded: (state,action) => {
            state.isArrTaskLoaded =action.payload
        },
        removeTodo: (state, action) => {
            state.arrTask = state.arrTask.filter(item => item.idOfTask !== action.payload)
        }
    } 
};

export const { actions, reducer } = createSlice(reducerStates);