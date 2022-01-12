import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask'

function BtnFinishedTask() {
    const activeBtn = useSelector(store => store.reducersAll.displayedList);
    const dispatch = useDispatch();
    
    const arrTaskFilter = data => {
        const filterForAllTask = {
          displayedList: data
        }
        dispatch(actions.setDisplayedList(filterForAllTask.displayedList))
      };

    let newClassName = 'btn-style'
    if (activeBtn === 'closed') {
        newClassName = 'btn-style active'
    }

    return (
        <button className={newClassName} onClick={() => arrTaskFilter('closed')}>Завершенные задачи</button>
    )
};

export default BtnFinishedTask