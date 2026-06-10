import React from 'react'

const GreateGrandChild = ({message}) => {
    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>GreateGrandChild Component Its My message - {message}</h5>
        </div>
    )
}

export default GreateGrandChild