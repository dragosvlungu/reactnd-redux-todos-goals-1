// Library code
function createStore(reducer) {
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
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    getState,
    subscribe,
    dispatch
  };
}

// App code (reducer)
function todos(state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo]);
  }

  return state;
}

// Create the store
const store = createStore(todos);

// subscribe to the listener
store.subscribe(() => {
  console.log('The new state is: ', store.getState());
});

// dispatch an action
store.dispatch({
  type: 'ADD_TODO',
  todo: { id: 0, name: 'Learn Redux', complete: false }
});
store.dispatch({
  type: 'ADD_TODO',
  todo: { id: 1, name: 'Learn Python', complete: true }
});

const unsubscribe = store.subscribe(() => {
  console.log('The store changed');
});

// unsubscribe();
