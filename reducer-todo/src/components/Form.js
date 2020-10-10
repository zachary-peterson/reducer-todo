import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { initialState, tasksReducer } from '../reducers/reducer';

const FormContainer = styled.div`
    width: 80%;
    margin: 1% auto;
    background-color: #BC6508;
    color: white;
    padding: 2%;
    font-size: 1.5rem;
    border: 4px solid white;
    margin-bottom: .1%;

    input {
        font-size: 2rem;
        width: 50%;
        padding: 1%;
        text-align: center;
        font-family: 'Kavoon', cursive;
    }
`

const TodoContainer = styled.div`
    width: 85%;
    height: 48vh;
    padding: 4%;
    margin: 1% auto;
    color: white;
    background-color: #BC6508;
    border: 5px solid white;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 0;
    overflow-y: scroll;
    position: relative;

    h1 {
        font-size: 3rem;
        color: #f5f2d0;
        width: 90%;
        margin: .5% auto;
        font-family: 'Kavoon', cursive;
        text-shadow: 5px 1px black;
        margin-bottom: 3%;
    }

    .done {
        background-color: #57db00;

        &:hover {
            background-color: #67ff03;
        }
    }

`
const TaskContainer = styled.div`
    position: relative;
    background-color: #AE57FF;
    width: 30%;
    height: 10vh;
    padding: 4%;
    margin: 1% auto;
    border: 2px solid white;
    margin-bottom: 0;
    text-shadow: 3px 2px black;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #c17eff;
    }
`

const Button = styled.button`
    border: 2px solid white;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    padding: 1% 2%;
    margin: 1% 3%;
    
    &:hover {
        background-color: darkgray;
    }


`

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
            <TodoContainer>
                <h1>Tasks to complete:</h1>
                {
                    state.map(todo => {
                        console.log(todo);
                        return (
                            <TaskContainer className={(todo.completed ? "done" : "")} key={todo.id} onClick={() => toggleTask(todo.id)}>
                                <h3>{todo.task}</h3>
                            </TaskContainer>
                        )
                    })
                }
                {console.log(state)}
            </TodoContainer>

            <FormContainer>
                <input
                    name='todo'
                    onChange={handleChanges}
                    placeholder='Enter a new task here...'
                    type='text'
                    value={newTask}
                    autoFocus
                />
            </FormContainer>

            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={clearCompleted}>Clear Completed</Button>
        </div>
    )
}

export default Form;