import React from 'react';
import { createState, useState } from '@hookstate/core';
import ReactDOM from 'react-dom';

export const AsynchronousStateComponent = () => {
    const resourcePath = 'https://raw.githubusercontent.com/avkonst/hookstate/master/CNAME';
    const fetchResource = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        fetch(resourcePath).then((r) => r.text());
    };
    const state = useState(fetchResource);
    if (state.promised) {
        return <p>Loading {resourcePath}</p>;
    }

    if (state.error) {
        return (
            <p>
                Failed to load {resourcePath}
                <br />
                <code style={{ color: 'red' }}>{state.error.toString()}</code>
                <br />
                <button onClick={() => state.set(fetchResource)}>Retry</button>
            </p>
        );
    }
    return (
        <p key=''>
            Loaded {resourcePath}
            <br />
            <code style={{ color: 'green' }}>{state.value}</code>
            <br />
            <button onClick={() => state.set(fetchResource)}>Reload</button>
        </p>
    );
};

ReactDOM.render(<AsynchronousStateComponent />, document.getElementById('root'));
