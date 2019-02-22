function todos(state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo]);
  }

  return state;
}

function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen for changes on the state
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const dispatch = action => {
    state = todos(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    getState,
    subscribe
  };
}

// Example code
const store = createStore();
store.subscribe(() => {
  console.log('The new state is: ', store.getState());
});
const unsubscribe = store.subscribe(() => {
  console.log('The store changed');
});

var a = todos(store.getState(), {
  type: 'ADD_TODO',
  todo: { id: 0, name: 'Learn Redux', complete: false }
});

// store.getState();
console.log(a);
// unsubscribe();
