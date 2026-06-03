import axios from 'axios';
import React, { useState } from 'react'

const AxiosExCreateNewUser = () => {

    const [name , setName] = useState("");

    const handleSubmit = async() =>{
        try{
            const res = await axios.post("https://jsonplaceholder.typicode.com/users",{
                name:name,
            });
            console.log("User Created " , res.data);
        }
        catch(err){
            console.log("Api Error", err);
        }
    };

    return (
        <div className="container col-md-6 mt-2" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>Axios Ex Create New User</h5>
            <label className='form-label'>Enter Name</label>
            <input type="text"
            className='form-control w-50'
            placeholder='Enter Name '
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <button className="btn btn-primary m-2" onClick={handleSubmit}>Create User</button>
        </div>
    )
}

export default AxiosExCreateNewUser