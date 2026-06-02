import React, { useEffect, useState } from 'react'

const SessionDemo = () => {

    const[name , setName ] = useState("");

    useEffect(() =>{
        const savedName = sessionStorage.getItem("student");
        if(savedName) setName(savedName);
    }, []);

    const saveName =() =>{
        if(!name) return alert("Enter name");
        sessionStorage.setItem("student" ,name);
        alert("Name saved in Session Storage");
    };

    const clearName =() =>{
        sessionStorage.removeItem("student");
        setName("");
        alert("Name is removed from Session Storage");
    };

    return (
        <div className="container col-md-6 mt-2" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <div className='card'>
                <div className='card-header bg-success-subtle text-black text-center'>
                    <h5>Session Demo</h5>
                </div>
                <div className='card-body'>
                    <input className='form-control mb-3'
                    placeholder='Enter Student Name'
                    value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                    <button className='btn btn-primary m-2' onClick={saveName}>Save Name </button>
                    <button className='btn btn-danger m-2' onClick={clearName}>Remove Name</button>
                    <h5 className='mt-3'>Stored Name : {name}</h5>
                    <hr />
                    <p>
                        Refresh - Data Stays <br/>
                        Close tab - Data Deleted
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SessionDemo