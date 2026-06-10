import React, { useContext } from 'react'
import MyContext from './MyContext'

const GreatGrandChild = () => {

    const [msg, age] = useContext(MyContext);

    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>Great Grand Child Component - {msg} - Age is {age}</h5>
        </div>
    )
}

export default GreatGrandChild