import React from 'react';
import { createState, useState, none, postpone, Downgraded } from '@hookstate/core';

// ----- Primitive values
const state = createState('Hello');
state.value; //?

state.merge(' World'); // state.value will be "Hello World"
// or the same
state.set((p) => p + ' World');
state.value; //?

state.set(10);
state.set((v) => v + 5);
state.value; //?

state.set({ name: 'jack' });
state.merge({ lastName: 'joe' });
state.get(); //?
JSON.stringify(state.get()); //?
JSON.parse(JSON.stringify(state.get())); //?
state.get().name; //?
state.name.value; //?
state.lastName.get(); //?
state.attach(Downgraded).get(); //?
state.keys; //?
state.error; //?
state.promised; //?
state.value; //?
state.set((a) => ({ ...a, name: 'hghh' })); //?
state.value; //?

// ----- Array Manupulation -----
// Delete from an array
state.set([10, 20, 30]);
state.value; //?
state[1].set(none);
state.value; //?

// Append to an array
state.set([1000, 2000]);
state.merge([3000]);
state.value; //?

// Append to an array of objects
state.set([
    { name: 'Ahmad', age: 20 },
    { name: 'Loku', age: 40 },
]);
state.merge([{ name: 'Amr', age: 40 }]);
state.value; //?

// Prepend to an array
state.set([3000, 4000]);
state.set((p) => {
    p.splice(0, 0, 1000, 2000);
    return p;
});
state.value; //?

// Array partial update
state.set([1000, 2000, 3000]);
state.merge({
    0: 2,
    1: none,
    3: 4000,
});
state.value; //?

// ----- Object Manupulation -----
// Update object's values
state.set({ a: 1, b: 2 });
state.set((p) => ({ a: p.a + 1, b: p.b - 1 }));
state.value; //?

// Geting names of existing properties
state.keys; //?

// Updating existing property
state.a.set((p) => p + 1); // increments value of property a
state.value; //?
// or
state['a'].set((p) => p + 1);
state.value; //?
// or
state.merge((p) => ({ a: p.a + 1 }));
state.value; //?
// Avoid the following 2 for updating values
state.set((p) => ({ ...p, a: p.a + 1 })); // unnecessary render
state.value; //?
state['a'].set(state.a.value + 1); // unnecessary render
state.value; //?

// Adding a new property
state.c.set(2);
state.value; //?
// or
state['d'].set(2);
state.value; //?
// or
state.merge({ e: 2 });
state.value; //?
// Avoid the following
state.set((p) => ({ ...p, f: 2 })); // less efficient
state.value; //?

// Deleting an existing property
state.c.set(none);
state.value; //?
// or
state['d'].set(none);
state.value; //?
// or
state.merge({ e: none });
state.value; //?
// Avoid the following, less efficient
state.set((p) => {
    delete p.f;
    return p;
});
state.value; //?

// Swapping two properties#
state.merge((p) => ({ b: p.a, a: p.b }));
state.value; //?

// Parital updates and deletions
state.set({
    propertyToUpdate: 1,
    propertyToDelete: 2,
});
state.value; //?
state.merge({
    propertyToUpdate: 2,
    propertyToDelete: none,
    propertyToAdd: 1,
});
state.value; //?

// Update value of an object's key in an array of objects
state.set([
    { name: 'Loku', age: 40 },
    { name: 'Bebem', age: 10 },
]);
state[0].merge({ age: 50 });
state.value; //?
