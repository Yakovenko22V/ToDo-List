import React from 'react'
import './headerBar.scss'
import BtnAllTask from '../../ComponentsBTN/BtnAllTask/BtnAllTask.js'
import BtnAllActiveTask from '../../ComponentsBTN/BtnAllActiveTask/BtnAllActiveTask'
import BtnFinishedTask from '../../ComponentsBTN/BtnFinishedTask/BtnFinishedTask'
import InputForSearch from '../InputForSearch/InputForSearch'

function HeaderBar() {
    
    return (
        <div className='header-bar'>
            <div className='search-block'>
                <InputForSearch/>
                <div className='buttons-sort'>
                    <BtnAllTask/>
                    <BtnAllActiveTask />
                    <BtnFinishedTask />
                </div>
            </div>
        </div>
    )
}

export default HeaderBar