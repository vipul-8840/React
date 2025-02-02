import React from 'react';

const Todo = React.memo(({ todo, addToDo }) => { 
    console.log("Todo called");

    return (
        <>
            <h2>My Todo</h2>
            {todo.map((val, index) => (
                <p key={index}>{val}</p>
            ))}
            <button onClick={addToDo}>Add Todo</button>
        </>
    );
});

export default Todo;
