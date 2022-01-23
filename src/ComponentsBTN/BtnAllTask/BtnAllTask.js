import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask';
import './btnAllTask.scss'

function BtnAllTask() {
  const activeBtn = useSelector(store => store.reducersAll.displayedList);
  const dispatch = useDispatch();

  const arrTaskFilter = data => {
    dispatch(actions.setDisplayedList(data))
  };

  let newClassName = 'btn-style non-active'
  if (activeBtn === 'all') {
    newClassName = 'btn-style active'
  }
  return (
    <button className={newClassName} onClick={() => arrTaskFilter('all')}>Все задачи</button>
  )
};

export default BtnAllTask;