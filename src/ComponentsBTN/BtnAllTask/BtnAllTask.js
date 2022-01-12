import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask'

function BtnAllTask() {
    const activeBtn = useSelector(store => store.reducersAll.displayedList);
    const dispatch = useDispatch();

    const arrTaskFilter = data => {
        const filterForAllTask = {
          displayedList: data
        }
        dispatch(actions.setDisplayedList(filterForAllTask.displayedList))
      };

    let newClassName = 'btn-style'
    if (activeBtn === 'all') {
        newClassName = 'btn-style active'
    }
    return (
        <button className={newClassName} onClick={() => arrTaskFilter('all')}>Все задачи</button>
    )
};

export default BtnAllTask;