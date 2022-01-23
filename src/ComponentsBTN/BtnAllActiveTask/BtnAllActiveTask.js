import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask';
import '../BtnAllTask/btnAllTask.scss'

function BtnAllActiveTask() {
  const activeBtn = useSelector(store => store.reducersAll.displayedList);
  const dispatch = useDispatch();

  const arrTaskFilter = data => {
    dispatch(actions.setDisplayedList(data))
  };

  let newClassName = 'btn-style non-active'
  if (activeBtn === 'allActive') {
    newClassName = 'btn-style active'
  }

  return (
    <button className={newClassName} onClick={() => arrTaskFilter('allActive')}>Active tasks</button>
  )
};

export default BtnAllActiveTask;