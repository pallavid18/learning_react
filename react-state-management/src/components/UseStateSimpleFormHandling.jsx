import  { React, useState } from 'react'

const UseStateSimpleFormHandling = () => {

    const [name , setName] = useState("");
    const [error , SetError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name.trim()){
            SetError("Name is Required");
            return;
        }
        if(name.trim().length<3){
            SetError("Name must be at least 3 Character");
            return;
        }
        SetError("");
        SetError("Your Name : "+ name);
    }


    return (
        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
            <h5>UseState Simple Form Handling</h5>
            <form onSubmit={handleSubmit}>
                <input className='form-control w-50'
                type="text" placeholder='Enter Name' value={name} onChange={(a) =>{
                    setName(a.target.value);
                    SetError("");
                }}
                style={{border: error ? "1px solid red" : "1px solid grey", padding:"10px"}}/>
                {error && (
                    <p style={{color:"red", marginTop:"4px"}}>{error}</p>
                )}
                <button className='btn btn-info m-4' type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default UseStateSimpleFormHandling