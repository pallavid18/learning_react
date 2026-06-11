import React from 'react'
import UseCounter from '../hooks/UseCounter'

const Counter1 = () => {
    const {count,increment,decrement,reset} = UseCounter();
    return (
        <div className="container col-md-6 mt-2" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>Counter1</h5>
            <h6>{count}</h6>
        <button className="btn btn-outline-info m-1" onClick={increment}>Increment</button>
        <button className="btn btn-outline-info m-1" onClick={decrement}>Descrement</button>
        <button className="btn btn-outline-info m-1" onClick={reset}>Rest</button>
        </div>
    )
}

export default Counter1