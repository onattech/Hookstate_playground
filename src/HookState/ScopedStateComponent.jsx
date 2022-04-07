import React from 'react';
import { useState, none } from '@hookstate/core';
import ReactDOM from 'react-dom';

export const ScopedStateComponent = () => {
    const state = useState([{ name: 'First Task' }]);

    return (
        <>
            {state.map((taskState, taskIndex) => (
                <TaskEditor key={taskIndex} taskState={taskState} />
            ))}
            <button onClick={() => state.merge([{ name: 'Untitled' }])}>Add task</button>
            <button onClick={() => state[state.length - 1].set(none)}>Remove last task</button>
        </>
    );
};

function TaskEditor(props) {
    const taskState = useState(props.taskState);
    return (
        <p>
            <input value={taskState.name.get()} onChange={(e) => taskState.name.set(e.target.value)} />
        </p>
    );
}

ReactDOM.render(<ScopedStateComponent />, document.getElementById('root'));
// x;
