// rerendering using React
// render function is called anytime the store is changed

const render = () => {
    ReactDOM.render(
        <Counter
            // passing current state of the store as a prop
            value={store.getState()}
            onIncrement={() =>
            // passing in callback with appropriate actions in props
                store.dispatch({
                    type: 'Increment'
                })
            }
            onDecrement = {() => 
                store.dispatch({
                    type: 'Decrement'
                })
            }
        />,
        document.getElementById('root')
        
    )
}


// Counter is a dumb function
// It has no logic, it determines how things are rendered
const Counter = ({ 
    value,
    onIncrement,
    onDecrement
    }) => (
        <div>
            <h1>{value}</h1>
            <button onCLick={onIncrement}>+</button>
            <button onCLick={onDecrement}>-</button>
        </div>
)

// deepFreeze ==> avoids mutations in original array

// avoid array mutations with concet(), slice(), ...spread
// change items in an array without mutating them

// push --> concat
// splice --> sliced
// spread (...list) --> ES6

// object Assign --> new to ES6 and not supported by all browsers

// expect function can be used to test outcome
expect(
    todos(stateBefore, action)  
).toEqual(stateAfter)