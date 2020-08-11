import React, { useState } from 'react';
import {initialState} from '../reducers/reducer';

const List = props => {
    const [tasks] = useState(initialState);  

    return (
        <div>
            {
                tasks.map(todo => {
                    return (
                        <div key={todo.id}>
                            <h3>{todo.task}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;