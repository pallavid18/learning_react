import React from 'react'
import GreateGrandChild from './GreateGrandChild'

const GrandChild = ({message}) => {
    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>GrandChild</h5>
            <GreateGrandChild message={message}/>
        </div>
    )
}

export default GrandChild