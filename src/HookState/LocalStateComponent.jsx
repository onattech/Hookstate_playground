import React from 'react';
import { useState } from '@hookstate/core';
import ReactDOM from 'react-dom';

export const LocalStateComponent = () => {
    const state = useState(0);
    return (
        <>
            <b>Counter value: {state.get()} </b>
            <button onClick={() => state.set((p) => p + 1)}>Increment</button>
        </>
    );
};

ReactDOM.render(<LocalStateComponent />, document.getElementById('root'));
