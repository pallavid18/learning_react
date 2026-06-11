import React from 'react'
import UseInput from '../hooks/UseInput'

const InputEx = () => {
    const name = UseInput("");
    return (
        <div className="container col-md-6 mt-2" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>InputEx</h5>
            <input className='form-control m-1'
            type='text' {...name}/>
            <h6 >Name : {name.value}</h6>
        </div>
    )
}

export default InputEx