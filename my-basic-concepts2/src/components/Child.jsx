import React from 'react'
import GrandChild from './GrandChild'

const Child = ({message}) => {
    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>Child</h5>
            <GrandChild message={message}/>
        </div>
    )
}

export default Child