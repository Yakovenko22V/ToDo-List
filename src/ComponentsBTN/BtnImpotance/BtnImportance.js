import React from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask';
import './btnImportance.scss'


function BtnImportance(props) {
    const {id} = props;
    const dispatch = useDispatch();
    const store = useSelector(store => store.reducersAll);

    const isTaskImportant = id => {
        const importanceOfEl = store.arrTask.map((el) => el.idOfTask === id
          ? { ...el, flagOfImportance: !el.flagOfImportance }
          : el)
        dispatch(actions.setArrTask(importanceOfEl))
      };

      
    return (
        <button className='btn-style importance' onClick={() => isTaskImportant(id)}>&#128681;</button>
    )
}

BtnImportance.propTypes = {
    id: PropTypes.number.isRequired
}

export default BtnImportance;