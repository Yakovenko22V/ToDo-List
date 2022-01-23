import React from "react";
import PropType from 'prop-types';

function TaskItem(props) {
    const {itemT, itemN, title} = props
    return (
        <div>{title} '
            <span className={(itemT.length) ? 'span-task' : (itemT ? 'span-import red' : 'span-import black')} id={(itemN===false) ? 'non-active-style' : ''}>
            {
            (itemT.length) ?
            itemT : (itemT ? 'High' : 'Low')
            }
             </span>'
        </div>
    )
}
TaskItem.propType = {
 itemN: PropType.bool.isRequired,
 itemT: PropType.bool.isRequired,
 title: PropType.string.isRequired
}

export default TaskItem;