import React from 'react'
import GreatGrandChild from './GreatGrandChild'

const GrandChild = () => {
    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>GrandChild</h5>
            <GreatGrandChild/>
        </div>
    )
}

export default GrandChild