import React from 'react';
import { createState, useState } from '@hookstate/core';
import ReactDOM from 'react-dom';

const globalState = createState(0);
setInterval(() => globalState.set((p) => p + 1), 3000);

export const GlobalStateComponent = () => {
    const state = useState(globalState);
    state.get(); //?
    return (
        <>
            <b>Counter value: {state.get()}</b> (watch +1 every 3 seconds) <button onClick={() => state.set((p) => p + 1)}>Increment</button>
        </>
    );
};

ReactDOM.render(<GlobalStateComponent />, document.getElementById('root'));
