import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask'

function BtnActive(props) {
    const {id, item } = props
    const dispatch = useDispatch();
    const store = useSelector(state => state.reducersAll)

    const isTasksActive = id => {
        const activityOfEl = store.arrTask.map((el) => el.idOfTask === id
          ? { ...el, isTaskActive: !el.isTaskActive }
          : el)
        dispatch(actions.setArrTask(activityOfEl))
      };

    const changeText = (item.isTaskActive === true) ? "Деактивировать" : "Активировать"

    return (
        <button className='btn-style' onClick={() => isTasksActive(id)}>{changeText}</button>
    )
};

export default BtnActive;