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