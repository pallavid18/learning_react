import React, { useEffect, useState } from 'react'

const CookiesExample = () => {

    const [name , setname] = useState("");
    const [ input , setInput] = useState("");

    useEffect(() =>{
        const savedName = getCookie("student");
        if(savedName){
            setname(savedName);
        }
    },[]);

    const setCookie =() =>{
        if(!input) return alert("Enter name ");
        document.cookie = `student=${input}; expires=Tue, 03 June 2026 14:36:00 UTC UTC UTC; path=/`;
        setname(input);
        setInput("");
    };

    const getCookie =(key) =>{
        const cookies = document.cookie.split("; ");
        for(let c of cookies){
            const [k ,v ] = c.split("=");
            if(k === key) return v;
        }
        return " ";
    };

    const deleteCookie =() =>{
        document.cookie = `student=; expries=Mon, 01 Jan 2001 14:00:00 UTC UTC UTC ; path=/`;
        setname("");
        alert("Cookie Deleted");
        return;
    }

    return (
        <div className="container col-md-6 mt-2" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            
            <div className='card'>
                <div className='card-header'>
                    <h5>Cookies Example</h5>
                </div>
                <div className='card-body'>
                    <input className='form-control mb-3'
                    placeholder='Enter Name'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />
                    <button className='btn btn-primary m-1' onClick={setCookie}>Set Cookie</button>
                    <button className='btn btn-danger m-1' onClick={deleteCookie}>Delete Cookie</button>
                    <hr/>
                    <h5>Stored Cookie: </h5>
                    <p>{name ? name : "No Cookie Found "}</p>
                    <hr/>
                    <p>
                        Refresh Page Cookie Stays <br/>
                        Close browser - Cookies Stays <br/>
                        Delete /or Expries - Cookies Deleted /Remove <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CookiesExample