// Reducer Function
// Needs both State and Action

const reducerFunction = (state = 0, action) => {
    switch (action.type){
        case 'INC':
            return state + 1;
        case "Dec":
            return state - 1;
        default:
            return state;
    }
}

// Needs three things at the store
const { createStore } = Redux;

// store takes in a reducer function
const store = createStore(reducerFunction);


// first method is getState that helps us get the initial state
store.getState();

// dispatches action to allow the change in the state
store.dispatch({type: 'Increment'});


// needs this to render the initial state
const render = () => {
    document.body.innerText = store.getState();
}

// store.subscribe renders to the body
// registers a callback that the store will call anytime an action has been dispatched
store.subscribe(render);
render();


document.addEventListener('click', () => {
    store.dispatch({type: "Increment" });
})