import React, { useState, useReducer } from 'react';
import { initialState, tasksReducer } from '../reducers/reducer';

const Form = props => {
    const [newTask, setNewTask] = useState('');
    const [state, dispatch] = useReducer(tasksReducer, initialState);


    const handleChanges = e => {
        setNewTask(e.target.value)
    };

    const handleSubmit = e => {
        dispatch({ type: 'ADD_NEW_TASK', payload: newTask});
    };
    
    const toggleTask = e => {
        dispatch({ type: 'MARK_COMPLETED', payload: e});
    };

    const clearCompleted = e => {
        dispatch({ type: 'CLEAR_COMPLETED'})
    }

    return (
        <div>
            <div>
                {
                    state.map(todo => {
                        console.log(todo);
                        return (
                            <div key={todo.id} onClick={() => toggleTask(todo.id)}>
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
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default Form;