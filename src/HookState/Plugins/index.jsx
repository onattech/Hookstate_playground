const SalaryPluginId = Symbol('SalaryPlugin');
export function SalaryPlugin() {
    return {
        id: SalaryPluginId,
        init: () => {
            return {
                onSet: (data) => {
                    return (data.value.weeklySalary = data.value.hourlyWage * 40);
                },
            };
        },
    };
}

const MyStateWatchPluginId = Symbol('MyStateWatchPlugin');
export function MyStateWatchPlugin() {
    return {
        id: MyStateWatchPluginId,
        init: () => {
            console.log('plugin attached');
            return {
                onSet: (data) => {
                    console.log('new state set', data.state);
                    console.log('at path', data.path);
                    console.log('to a new value', data.value);
                    console.log('from old value', data.previous);
                    console.log('merged with', data.merged);
                },
                onDestroy: (data) => {
                    console.log('state detroyed', data.state);
                },
                onBatchStart: (data) => {
                    console.log('batch started', data.state);
                    console.log('at path', data.path);
                    console.log('with context', data.context);
                },
                onBatchFinish: (data) => {
                    console.log('batch finished', data.state);
                    console.log('with context', data.context);
                },
            };
        },
    };
}
