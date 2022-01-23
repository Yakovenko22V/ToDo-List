import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask';
import './btnActive.scss'

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

    const classNameBTN = (item.isTaskActive === true) ? 'btn-style done' : 'btn-style notDone'
    const changeText = (item.isTaskActive === true) ? '\u2713' : '\u21BB'

    return (
        <button className={classNameBTN} onClick={() => isTasksActive(id)}>{changeText}</button>
    )
};

export default BtnActive;