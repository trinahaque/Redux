//reimplementing createStore from redux

const createStore = (reducer) => {
    let state;
    let listeners = [];
    // needs to keep track of how many times subscribe is changing


    // returns the value of current state
    const getState = () => state;

    const dispatch = (action) => {
        // dispatch an action is only way to change state
        state = reducer(state, action);
        // change every listener by calling it
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        // any time subscribe is called, we push it to listener array
        listeners.push(listener);
        return () => {
            // unsubscribe or remove this from listener array
            listeners = listeners.filter(l => l != listener);
        }
    }

    // keep the initial value after all these are done
    dispatch({});

    return { getState, dispatch, subscribe };
}