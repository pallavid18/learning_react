import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>
                Child
                <GrandChild/>
            </h5>
        </div>
    )
}

export default Child