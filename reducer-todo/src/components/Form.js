import React, { useState, useReducer } from 'react';
import { initialState, tasksReducer } from '../reducers/reducer';

const Form = props => {
    const [newTask, setNewTask] = useState('');
    const [state, dispatch] = useReducer(tasksReducer, initialState);


    const handleChanges = e => {
        setNewTask(e.target.value)
    };

    const addTask = e => {
        dispatch({ type: 'MARK_COMPLETED'});
    }

    const handleSubmit = e => {
        dispatch({ type: 'ADD_NEW_TASK', payload: newTask});
    }

    return (
        <div>
            <div>
                {
                    state.map(todo => {
                        return (
                            <div key={todo.id} onClick={addTask}>
                                <h3>{todo.task}</h3>
                            </div>
                        )
                    })
                }
                {console.log(state)}
            </div>

            <form>
                <input
                    name='todo'
                    onChange={handleChanges}
                    placeholder='Enter a new task here...'
                    type='text'
                    value={newTask}
                />
            </form>

            <button onClick={handleSubmit}>Submit</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default Form;