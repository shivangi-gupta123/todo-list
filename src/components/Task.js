import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Task = ({ task, deleteTodo, index, handleEdit }) => {

    return (
        <div className='task'>
            <h2> {task} </h2>
            <button className='delete-btn' onClick={() => deleteTodo(index)}><DeleteIcon /> </button>
            <button className='edit-btn' onClick={() => handleEdit(index)}><EditIcon /> </button>

        </div>
    )
}

export default Task;