import {  React, useRef, useState } from 'react'

const UseRefWithInput = () => {

    const nameRef = useRef();
    const [name, setName] = useState();
    const handleSubmit =() =>{
        setName(nameRef.current.value);
    }

    return (

        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
            <h5>Use Ref With Input</h5>
            <hr/>
            <input 
            type='text'
            ref={nameRef}
            placeholder='Enter Name'/>
            <button className="btn btn-primary w-10  py-2 rounded-3 m-2" onClick={handleSubmit}>Submit</button>
            <h6>Name : {name}</h6>
        </div>
    )
}

export default UseRefWithInput