import React, { useState } from 'react';
import Form from './Form';

const List = props => {
    const [tasks] = useState(props.state);

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