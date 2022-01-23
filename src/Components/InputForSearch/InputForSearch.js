import './input.scss';
import { useDispatch} from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerArrTask'

function InputForSearch() {
    const dispatch = useDispatch();

    const filteredByInput = data => {
        if (data.length === data.trim().length) 
        dispatch(actions.setFilteredByInput(data))
    };

    return (
        <input className='inputData' placeholder='Search for a task...' onChange={(e) => filteredByInput(e.target.value)}></input>
    )
}

export default InputForSearch;