import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { AsynchronousStateComponent } from './HookState/AsynchronousState';
import { GlobalStateComponent } from './HookState/GlobalState';
import { LocalStateComponent } from './HookState/LocalStateComponent/';
import { NestedStateComponent } from './HookState/NestedStateComponent';
import { ScopedStateComponent } from './HookState/ScopedStateComponent';

function App() {
    const [count, setCount] = useState(0);
    count; //?

    return (
        <div className='App'>
            <GlobalStateComponent />
            <br />
            <LocalStateComponent />
            <br />
            <NestedStateComponent />
            <br />
            <ScopedStateComponent />
            <br />
            <AsynchronousStateComponent />
        </div>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
document.getElementById('root').innerHTML; //?

// At this point, either break the code to display live feedback next to the variables
// Keep the code sound to get the feedback off the output below
// x; // <== comment/uncomment to see the difference
