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
const store = createStore(reducerFunction);
