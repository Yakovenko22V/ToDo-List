import React, { useEffect } from 'react';
import './App.css';
import './styles-bar.scss';
import './TaskList/TaskList'
import TaskList from './TaskList/TaskList';
import { loadData } from './Utils/loadData';
import PreLoadingPage from './Components/PreLoadingPage/PreLoadingPage';
import { filterForArray } from './functions/filterForArray/filterForArray';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/reducers/statesReducer/reducerArrTask';
import Form from './Components/Form/Form';

const App = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.reducersAll);

  useEffect(() => {
    loadData().then((data) => {
      dispatch(actions.setArrTask(data))
      dispatch(actions.setIsArrTaskLoaded(true))
    })
  }, [dispatch])

  if (!store.isArrTaskLoaded) {
    return <PreLoadingPage />
  }

  return (
    <div className='parent-block'>
      <HeaderBar />
      <div className='box'>
        <div className='todo-list'><h1>TODO-List</h1></div>
        <div className='wrapper'>
          <Form />
          <div className='task-container'>
            {
              filterForArray({ array: store.arrTask, condition1: store.displayedList, condition2: store.filteredByInput }).map((item) =>
                <TaskList key={item.idOfTask} item={item} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;