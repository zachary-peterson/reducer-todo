import React, { useState, useReducer } from 'react';
import { initialState, tasksReducer } from '../reducers/reducer';

const Form = props => {
    const [newTask, setNewTask] = useState('');
    const [state, dispatch] = useReducer(tasksReducer, initialState);

    const handleChanges = e => {
        setNewTask(e.target.value)
    };

    return (
        <div>
            <form>
                <input
                    name='todo'
                    onChange={handleChanges}
                    placeholder='Enter a new task here...'
                    type='text'
                    value={newTask}
                />
            </form>

            <button>Submit</button>
        </div>
    )
}

export default Form;