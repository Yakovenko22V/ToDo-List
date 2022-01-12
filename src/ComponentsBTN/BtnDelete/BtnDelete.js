import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask'

function BtnDelete(props) {
    const {id} = props
    const dispatch = useDispatch();

    function deleteItem(id) {
        dispatch(actions.removeTodo(id))
    }
    return (
        <button className='btn-style' onClick={() => deleteItem(id)}>Удалить задачу</button>
    )
};

BtnDelete.propTypes = {
    id: PropTypes.number.isRequired
}

export default BtnDelete;