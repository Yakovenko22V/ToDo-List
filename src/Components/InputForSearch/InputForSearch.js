import './input.scss';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask'

function InputForSearch() {
    const dispatch = useDispatch();

    const filteredByInput = data => {
        const filteredByInputText = {
            filteredByInput: data
        }
        dispatch(actions.setFilteredByInput(filteredByInputText.filteredByInput))
    };

    return (
        <input className='inputData' placeholder='Поиск задач' onChange={(e) => filteredByInput(e.target.value)}></input>
    )
}

export default InputForSearch;