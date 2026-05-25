import React, { useState } from 'react'

const UseStateInputEx = () => {
    const [name,setName] = useState("");
    return (
        <div  className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>Use state using Input</h5>
            <label className='form-label' >Enter Name</label>
            <input className='form-control'
                type="text"
                placeholder='Enter Name'
                onChange={(e) => setName(e.target.value)}/>
            <h6 className='text-primary'>Your Entered Name : {name}</h6>
        </div>
    )
}

export default UseStateInputEx