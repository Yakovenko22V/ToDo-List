import React from "react";
import { useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask';
import './btnDelete.scss'

function BtnDelete(props) {
    const { id } = props
    const dispatch = useDispatch();

    function deleteItem(id) {
        dispatch(actions.removeTodo(id))
    }

    return (
        <button className='btn-style delete' onClick={() => deleteItem(id)}>&#10007;</button>
    )
};

export default BtnDelete;