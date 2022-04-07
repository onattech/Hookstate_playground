import React from 'react';
import { useState, Downgraded, none } from '@hookstate/core';
import ReactDOM from 'react-dom';

export const NestedStateComponent = () => {
    const state = useState([{ name: 'First Task' }]);
    state[0].attach(Downgraded);
    state[0].get(); //?

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
    const taskState = props.taskState;
    return (
        <p>
            <input value={taskState.name.get()} onChange={(e) => taskState.name.set(e.target.value)} />
        </p>
    );
}

ReactDOM.render(<NestedStateComponent />, document.getElementById('root'));
// x;
