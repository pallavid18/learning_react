import  {React, useState } from 'react'

const UseStateWithBoolean = () => {
    const [show,setShow] = useState(true)
    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h4>Use State With Boolean</h4>
            <p>Toggle Example</p>
            <button className="btn btn-primary m-2" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Text </button>
            {show && <p>This is visible</p>}
            
        </div>
    )
}

export default UseStateWithBoolean