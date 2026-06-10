import React, { useState } from 'react'

const WithoutUseMemo = () => {

    const [number , setNumber] = useState(0);
    const [text , setText] = useState("");
    const doubleNumber = slowDouble(number);
    
    return (
        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
            <h5 className='text-center'>Without UseMemo</h5>
            <input className='border-primary-subtle m-1'
            type='number'
            value={number}
            onChange={(e)=> setNumber(e.target.value)}/>
            <input className='border-primary-subtle m-1'
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}/>

            <h6>Double : {doubleNumber}</h6>

        </div>
    )
}

function slowDouble(num){
    console.log("Slow function running");
    for(let i = 0; i<1000000000; i++){}
    return num *2;
}

export default WithoutUseMemo