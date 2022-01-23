import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask';
import './form.scss'

const Form = () => {
    const [inputTextForAdd, setInputTextForAdd] = useState('');
    const dispatch = useDispatch();
    const store = useSelector((state) => state.reducersAll);

    const setAdditionalTask = data => {
        const arrWithNewTask = [...store.arrTask];
        arrWithNewTask.push(
            {
                nameOfTask: data,
                idOfTask: Date.now(),
                flagOfImportance: false,
                isTaskActive: true
            });
        dispatch(actions.setArrTask(arrWithNewTask))
    };

    const getAdditionalText = (data) => {
        const additionalTask = {
            inputTextForAdd: data
        }
        setInputTextForAdd(additionalTask.inputTextForAdd);
    };

    const disableBtnProps = () => (inputTextForAdd === undefined ||
        inputTextForAdd === '' ||
        inputTextForAdd.replace(/\s/g, "") === "") ? true : false;
    const setClassName = () => (disableBtnProps() === true) ? 'ds' : 'btn-style btnForm'

    return (
        <div className='tools-to-add'>
            <input placeholder='Create a task' onChange={(e) => getAdditionalText(e.target.value)}></input>
            <button className={setClassName()} disabled={disableBtnProps()} onClick={() => setAdditionalTask(inputTextForAdd)}>Add</button>
        </div>
    )
}

export default Form;