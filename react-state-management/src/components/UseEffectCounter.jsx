import  {React, useEffect, useState } from 'react'

const UseEffectCounter = () => {

    const [count, setCount] = useState(0);
    useEffect(()=>{console.log("Runs on every Render");});  //Every Render
    useEffect(()=>{console.log("Count Changes Once ",count);},[]); //Runs only once
    useEffect(()=>{console.log("Count changed",count);},[count]);  //Run when count updates

    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h4>Use Effect Counter</h4>
            <h5 className="d-inline-flex"> {count}</h5>
            <button  className="btn btn-primary m-2" onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}

export default UseEffectCounter